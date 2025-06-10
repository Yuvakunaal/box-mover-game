# 🧊 Box Mover Game 
**A responsive interactive game with keyboard and touch controls**

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
```

### Mobile
```mermaid
flowchart TB
    Touch[↑ → ↓ ←] --> Movement
    Center[⌖] --> Reset
```

# 🚀 Advantages and Usefulness

* **Engaging Gameplay:** Offers interactive challenges with smooth movement mechanics.
* **Accessibility:** Supports both desktop and mobile devices, enhancing user accessibility.
* **Learning Opportunity:** Demonstrates CSS media queries and JavaScript event handling for responsive and interactive web applications.
* **Fun and Relaxation:** Provides an enjoyable experience for users looking to unwind or test their skills.
