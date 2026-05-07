# @thinkpixellab-public/azure-global-agents

> [!IMPORTANT]
> **This package is deprecated and no longer maintained.**

## Why

- `keepAlive: true` is the default on `http.globalAgent` in Node 19+, which made the package's primary purpose obsolete.
- Modern HTTP clients (`undici`, the Azure SDK, etc.) manage their own connection pools and don't honor `http.globalAgent` overrides, so the package wasn't actually doing anything useful for most consumers.
- The Azure SNAT-aware `maxSockets` cap is better configured per-app where the deployment SKU is known.

## What to do

If you currently depend on this package, you can typically just remove it. Node's defaults handle the keep-alive case, and per-app HTTP agent tuning is a small one-off if SNAT exhaustion ever surfaces.
