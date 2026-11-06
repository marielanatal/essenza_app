#!/usr/bin/env python3
"""Gera os áudios do app com vozes neurais (edge-tts): Elvira (feminina) e Álvaro (masculina), espanhol da Espanha.
Uso: gen_audio.py audio-texts.json pasta_de_saida
Lê [{k, t, m}] e cria <k>.mp3 (Elvira) e, quando m, <k>-m.mp3 (Álvaro). Só gera o que falta. Escreve index.json."""
import asyncio, json, os, sys, time

FEM = "es-ES-ElviraNeural"
MAS = "es-ES-AlvaroNeural"
RATE = "-8%"

async def main(src, out):
    import edge_tts
    items = json.load(open(src, encoding="utf-8"))
    os.makedirs(out, exist_ok=True)
    jobs = []
    for it in items:
        jobs.append((it["k"], it["t"], FEM))
        if it.get("m"):
            jobs.append((it["k"] + "-m", it["t"], MAS))
    todo = [j for j in jobs if not os.path.exists(os.path.join(out, j[0] + ".mp3"))]
    print(f"{len(jobs)} áudios no total, {len(todo)} a gerar", flush=True)
    sem = asyncio.Semaphore(int(os.environ.get("TTS_PAR", "5")))
    done = 0; fails = []
    t0 = time.time()

    async def one(key, text, voice):
        nonlocal done
        path = os.path.join(out, key + ".mp3"); tmp = path + ".part"
        async with sem:
            for attempt in range(4):
                try:
                    com = edge_tts.Communicate(text, voice, rate=RATE)
                    await com.save(tmp)
                    if os.path.getsize(tmp) < 400:
                        raise RuntimeError("arquivo vazio")
                    os.replace(tmp, path)
                    done += 1
                    if done % 50 == 0:
                        print(f"  {done}/{len(todo)} ({int(time.time()-t0)} s)", flush=True)
                    return
                except Exception as e:
                    await asyncio.sleep(1.5 * (attempt + 1))
                    err = e
            fails.append((key, str(err)[:80]))
            try: os.remove(tmp)
            except OSError: pass

    await asyncio.gather(*(one(*j) for j in todo))
    keys = sorted(f[:-4] for f in os.listdir(out) if f.endswith(".mp3"))
    json.dump({"k": keys, "voices": [FEM, MAS], "rate": RATE}, open(os.path.join(out, "index.json"), "w"), ensure_ascii=False)
    print(f"gerados {done}, falhas {len(fails)}, índice com {len(keys)} áudios", flush=True)
    for k, e in fails[:20]:
        print("  falhou:", k, e)
    if fails and len(fails) > len(todo) * 0.3:
        sys.exit(1)

if __name__ == "__main__":
    asyncio.run(main(sys.argv[1], sys.argv[2]))
