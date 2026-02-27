#!/bin/bash
# NexusHome OS — ISO Build Engine
# This script is a template meant to be used with 'xorriso' and 'debian-installer'

CONFIG_FILE="../nexus.config.yaml"

# Read Config (using simple grep/sed for bash simplicity)
SYSTEM_NAME=$(grep 'name:' $CONFIG_FILE | cut -d '"' -f 2)
PRIMARY_COLOR=$(grep 'primary_color:' $CONFIG_FILE | cut -d '"' -f 2)

echo "Building $SYSTEM_NAME ISO..."
echo "Primary Theme Color: $PRIMARY_COLOR"

# 1. Prepare minimal Debian 12 Base
# 2. Inject nexus.config.yaml into /etc/nexus/
# 3. Pre-install Docker CE & Docker Compose V2
# 4. Set GRUB_RECORDFAIL_TIMEOUT=0
# 5. Enable Wayland (Weston) Auto-Login

echo "Packing ISO with xorriso..."
# xorriso -as mkisofs ... -o nexus-os-v1.iso .

echo "Build Complete: nexus-os-v1.iso"
