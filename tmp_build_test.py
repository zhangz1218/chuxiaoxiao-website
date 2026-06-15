import subprocess, sys, os

project_dir = r'E:\极空间双向同步\拥抱AI\龙虾\独立站\chuxiaoxiao-website'
os.chdir(project_dir)

# First, install marked-highlight (should already be done)
result = subprocess.run(['npm', 'run', 'build'], capture_output=True, text=True, cwd=project_dir, timeout=300)
print("STDOUT:", result.stdout[-3000:] if len(result.stdout) > 3000 else result.stdout)
print("STDERR:", result.stderr[-3000:] if len(result.stderr) > 3000 else result.stderr)
print("Return code:", result.returncode)