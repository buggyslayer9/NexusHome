Product Requirements Document: NexusHome OS

1. Project Overview

NexusHome OS is a specialized, Unix-based operating system designed to transform legacy x86 hardware (specifically optimized for Intel Core i5-3rd Gen with 8GB RAM) into a powerful home server and media hub. It features a robust Docker backend, a JavaScript-based plugin system, and Hybrid Display Support for simultaneous VGA and HDMI outputs, all manageable via a unified remote experience.

2. Target Audience & Hardware

Hardware Profile: Optimized for Intel Core i5-3xxx series, 8GB DDR3 RAM, and Integrated Intel HD Graphics.

Bilingual Users: Native support for Arabic and English UI/UX.

Remote Users: Users needing full GUI access to their server via mobile data (4G/5G) or external PCs from anywhere in the world.

3. Core System Architecture

3.1 Base Operating System (The "Nexus" Foundation)

Base Distro: Debian 12 (Bookworm) Stable. * Display Server: Wayland (via Weston or Sway). * Auto-Recovery: GRUB_RECORDFAIL_TIMEOUT=0 and BIOS "Always On" settings.

3.2 Docker & Container Management

The OS uses Docker as the primary method for running apps to ensure that the core Debian system remains clean and stable.

The Docker Engine: Uses the community-edition (Docker CE) with a custom Resource Limiter. Given the 8GB RAM limit, the OS automatically assigns a memory-reservation to critical services (Athan Daemon, RDP) to prevent them from being "killed" if a media app leaks memory.

Orchestration: Docker Compose V2. Every "App" in the Marketplace corresponds to a pre-configured YAML file.

Storage Strategy (Persistence): * Bind Mounts: Used for media libraries (Movies/TV). This allows the host OS and the container to see the same files simultaneously.

Named Volumes: Used for database files (Jellyfin metadata, Islamic Suite settings) to ensure high-performance I/O and easy backups.

Monitoring: Includes Dozzle (for real-time log viewing in the Web UI) and Watchtower (configured to notify but not auto-update, preventing breaking changes in the middle of a movie).

3.3 Unified Remote Access (The RDP Engine)

Technology: Apache Guacamole + Cloudflare Tunnel.

Interaction: Full high-fidelity PC mirroring and a specialized "Mobile Touch" mode.

4. Feature Requirements

4.1 Media & IPTV Engine

Technology: FFmpeg + Jellyfin Backend. * Islamic Sync: Background daemon triggers volume "ducking" via pactl during Athan.

4.2 JavaScript Plugin System (Cinema Mode)

Engine: Node.js vm2 or v8-sandbox.

Logic: Lightweight scrapers for third-party media providers.

4.3 Islamic Suite & Family Hub

Dashboard: MagicMirror² (modified) for VGA output.

5. Screen Breakdown & User Experience

5.1 The Installation Experience

Tool: Calamares. Custom wizard for location-based Athan setup.

5.2 The VGA Interface (Local Admin)

UI Framework: React + Tailwind CSS.

Marketplace: A visual GUI for Docker. When a user clicks "Install," the backend runs docker compose up -d for that specific service.

5.3 Mobile Remote App (Smart RDP)

Athan Quick-Mute: Persistent button for instant local silencing.

Upload Bridge: Secure tunnel for sending mobile photos to the server's cloud storage.

6. Technical Stack Summary

OS Base: Debian 12 + Docker.

Networking: Cloudflare Zero Trust.

Frontend: React (SPA).

Backend: Node.js (API) + Python (Automation).

Storage Pathing: /srv/nexus/apps for configs, /mnt/storage for media.

7. Development Roadmap

Phase 1: Build custom Debian ISO.

Phase 2: Integrate Cloudflare/Guacamole RDP portal.

Phase 3: Docker Marketplace & Resource Management Logic.

Phase 4: Islamic Suite & Automation.

Phase 5: Final Polish & Bilingual support.