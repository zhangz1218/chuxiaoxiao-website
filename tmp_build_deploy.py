import subprocess, sys, os

os.chdir(r'E:\极空间双向同步\拥抱AI\龙虾\独立站\chuxiaoxiao-website')

def run(cmd, timeout=120):
    r = subprocess.run(cmd, shell=True, capture_output=True, timeout=timeout)
    out = r.stdout.decode('utf-8', errors='replace')
    err = r.stderr.decode('utf-8', errors='replace')
    if len(out) > 3000:
        print(out[-3000:], flush=True)
    else:
        print(out, flush=True)
    if err:
        print('STDERR: ' + err[-1000:], flush=True)
    return r, out, err

print('[STEP 1/3] npm run build...', flush=True)
r, out, err = run('npm run build')
if r.returncode != 0:
    print('[FAIL] Build failed (code ' + str(r.returncode) + ')', flush=True)
    sys.exit(1)
print('[OK] Build succeeded', flush=True)

print('[STEP 2/3] git add...', flush=True)
subprocess.run('git add -A', shell=True, capture_output=True, timeout=30)

print('[STEP 2/3] git commit...', flush=True)
subprocess.run('git commit --allow-empty -m "sync diary 2026-05-09 via edit tool"', shell=True, capture_output=True, timeout=30)

print('[STEP 3/3] git push...', flush=True)
run('git push')
print('[DONE] Deployed', flush=True)