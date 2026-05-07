# Above the Rim — Requirements

## Context

A web app for a basketball coach running intensive training camps for teenagers. The coach manages hundreds of drills, builds daily training plans, and tracks player improvement metrics. Access is restricted to paid camp members only.

## Users

| Role   | Description |
|--------|-------------|
| Coach  | Full access — manages drills, plans, and views all player progress |
| Player | Restricted access — views their own progress and assigned training plans |

## Functional Requirements

### Authentication & Access Control
- Login with username and password
- Role-based access: coach vs. player
- Players can only see their own progress data
- Access restricted to enrolled (paid) camp members

### Drill Library
- Browse a catalog of drills
- Filter by category (shooting, dribbling, defense, passing, conditioning, footwork)
- Filter by difficulty (beginner, intermediate, advanced)
- Search by name, description, or tag
- Each drill shows: name, description, category, difficulty, duration, coaching cues, equipment needed, tags
- Optional video link per drill

### Training Plans
- List of sessions with date, title, focus area, and total duration
- Each plan contains an ordered list of drills with sets, reps, duration, and per-drill coach notes
- Plan-level coach notes
- Separate view for upcoming vs. past sessions

### Player Progress Tracking
- Roster of enrolled players (jersey number, position, age)
- Per-player metric snapshots over time:
  - Vertical jump (cm)
  - 30m sprint time (seconds)
  - Field goal percentage
  - Free throw percentage
  - Stamina score
- Progress chart visualizing all metrics over time
- Improvement delta displayed (first snapshot vs. latest)
- Full measurement history table

### Dashboard
- Summary stats: total drills, plans, players
- Upcoming sessions (next 3)
- Recent sessions (last 2)
- Drill library breakdown by category

## Non-Functional Requirements

- Prototype only — no real database; all data is static mock data in TypeScript files
- UI: clean, easy to follow, suitable for a tablet used during practice
- Architecture: UI, business logic, and data access layer are separate
- Stack: React + TypeScript, Vite, Tailwind CSS, Recharts, React Router

## Architecture

```
src/
  types/        — shared TypeScript interfaces
  data/         — mock data (drills, players, plans, auth)
  services/     — business logic (drillService, playerService, planService, authService)
  components/   — reusable UI primitives and layout
  pages/        — page-level components
  hooks/        — React context hooks (useAuth)
```

## Future Considerations (not in prototype)

- Real database backend
- Coach can create/edit drills and plans in the UI
- Coach can record new player metric snapshots
- Video upload and hosting
- Player payment / enrollment management
- Push notifications for upcoming sessions
- Attendance tracking per session
- Drill assignment to specific players
