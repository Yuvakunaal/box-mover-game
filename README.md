# 🧊 Box Mover Game 
**A responsive interactive game with keyboard and touch controls**

<div align="center">
  <img src="https://via.placeholder.com/800x400/1e90ff/ffffff?text=Desktop+and+Mobile+Views" alt="Game Preview" width="600">
</div>

## 🌟 Features
| Feature | Implementation |
|---------|---------------|
| **Dual Controls** | Keyboard (WASD/Arrows) + Touch buttons |
| **Responsive Layout** | CSS Media Queries (`@media (max-width: 765px)`) |
| **Boundary Detection** | `window.innerWidth/innerHeight` calculations |
| **Smooth Movement** | CSS Transitions (`transition: 0.05s ease-in-out`) |

## 🎮 Controls
### Desktop
```mermaid
flowchart LR
    W[W/↑] --> Up
    A[A/←] --> Left
    S[S/↓] --> Down
    D[D/→] --> Right
    R[R] --> Reset
