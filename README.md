# Coconuter

Coconuter is a web-based tower defense game built with Cocos Creator / Construct-style game development workflow. The player builds and protects a main base, gathers resources through production buildings, and places defensive towers to survive enemy waves at night.

Play the deployed version: [https://coconuter-fbad6.web.app/](https://coconuter-fbad6.web.app/)

## Game Overview

The game starts with the player placing a main base. The objective is to protect that base by collecting resources and building defensive structures before enemies appear.

The map contains different resource areas. Each production building can only be placed on a compatible terrain type:

- **Lumber Mill**: gathers wood
- **Quarry**: gathers stone
- **Mine**: gathers ore or mineral resources

Collected resources are used to build defensive towers around the base.

## Core Gameplay

```text
Place main base
  -> Build resource production buildings
  -> Gather resources
  -> Build defensive towers
  -> Prepare during daytime
  -> Defend against enemies at night
  -> Survive the level
```

## Defensive Buildings

The game includes multiple tower types for defending the base:

- **Cannon Tower**: deals damage to enemies from range
- **Sword Tower**: close-range defensive structure
- **Mage Tower**: magical attack tower for enemy control or damage

Each tower contributes to the defense layout and helps prevent enemies from reaching the main base.

## Day-Night System

Coconuter uses a day-night cycle:

- **Daytime**: players build, gather resources, and prepare defenses.
- **Nighttime**: enemies spawn and attack the base.

Enemies only appear at night, so the player must use the daytime phase efficiently to prepare for the next wave.

## Levels

The game contains two levels. Difficulty is mainly controlled by enemy quantity and wave pressure.

## Lobby Features

The lobby includes:

- opening animation
- sign up and login
- scoreboard
- settings
- visual art style presentation

## Game Features

### Mini Map

A mini map helps players understand the overall map layout and monitor important areas during gameplay.

### Procedural Terrain

The project uses Perlin noise to generate or shape map variation, giving the terrain a more organic layout.

### BFS Pathfinding

Enemies use BFS pathfinding to navigate toward the player base. This allows enemy movement to react to the map layout and obstacles.

### Animation

The game includes animated UI/gameplay elements to make the lobby and in-game interactions feel more polished.

### Art Direction

Coconuter uses a custom visual style for its buildings, map, and game interface.

## Tech Stack

| Area | Tools / Concepts |
| --- | --- |
| Game Engine | Cocos Creator / web game build workflow |
| Deployment | Firebase Hosting |
| Procedural Generation | Perlin noise |
| Pathfinding | BFS pathfinding |
| Gameplay Systems | Tower defense, resource collection, day-night cycle |
| UI Systems | Lobby, login/signup, scoreboard, settings |

## Repository Notes

This repository contains a web game build. Some generated files may come from the game engine export process, so the source structure may differ from a hand-written web application.
