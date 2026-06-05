# Starts the Next.js dev server using the bundled portable Node in .tooling
# (this machine has no system Node). Run:  ./dev.ps1
# Once you install Node from https://nodejs.org you can just use:  npm run dev
$ErrorActionPreference = 'Stop'
$node = Join-Path $PSScriptRoot '.tooling\node-v24.16.0-win-x64'
if (-not (Test-Path (Join-Path $node 'node.exe'))) {
  Write-Host "Portable Node not found in .tooling. Install Node from https://nodejs.org, then run: npm run dev" -ForegroundColor Yellow
  exit 1
}
$env:Path = "$node;$env:Path"
Set-Location $PSScriptRoot
node 'node_modules\next\dist\bin\next' dev -p 3000
