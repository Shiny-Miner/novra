# Novra Project Roadmap

## Vision

Build Novra into a modern novel publishing and reading platform focused
on an outstanding reader experience.

## Tech Stack

-   Frontend: HTML, CSS, JavaScript
-   Backend: Supabase
-   Database: PostgreSQL
-   Storage: Supabase Storage

## Project Structure

``` text
novra/
├── index.html
├── README.md
├── ROADMAP.md
├── CHANGELOG.md
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── pages/
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── library.html
│   ├── novel.html
│   ├── chapter.html
│   ├── profile.html
│   ├── settings.html
│   └── admin/
│       ├── create-novel.html
│       ├── edit-novel.html
│       └── create-chapter.html
├── components/
│   ├── navbar.js
│   ├── footer.js
│   ├── auth.js
│   ├── supabase.js
│   └── reader.js
└── database/
    └── schema.sql
```

## MVP (v0.1)

-   User registration/login
-   User profiles
-   Author dashboard
-   Create/Edit novels
-   Create/Edit chapters
-   Reader page
-   Continue Reading
-   Personal library

## v0.2

-   Search
-   Genres
-   Ratings
-   Reviews
-   Comments
-   Bookmarks

## v0.3

-   Reading history
-   Reading streaks
-   XP
-   Coins
-   Levels

## v0.4

-   Daily & weekly missions
-   Achievements
-   Notifications

## v1.0

-   Recommendation engine
-   Collections
-   Author analytics
-   Moderation tools
-   Admin panel

## Core Reader Features

-   Continue Reading (restore chapter + scroll position)
-   Reading history
-   Reading progress
-   Reading statistics
-   Followed novels updates
-   Responsive reader
-   Dark/Light/Sepia themes
-   Font size, width, spacing controls
-   Fullscreen mode

## Gamification

### XP

-   Read chapter
-   Daily login
-   Review
-   Finish novel

### Levels

-   New Reader
-   Explorer
-   Scholar
-   Archivist
-   Sage
-   Grand Librarian
-   Mythic Reader
-   Legend

### Coins

Earn from reading, streaks, events and reviews. Spend on cosmetics and
profile customization.

### Achievements

-   First Chapter
-   First Novel Completed
-   30-Day Streak
-   Fantasy Master
-   Academy Enthusiast
-   Night Reader
-   Early Bird

### Missions

-   Daily
-   Weekly
-   Seasonal events

## Author Features

-   Dashboard
-   Drafts
-   Analytics
-   Followers
-   Views
-   Scheduled publishing
-   Cover uploads

## Social Features

-   Follow readers/authors
-   Public profiles
-   Public collections
-   Reviews
-   Threaded comments

## Database Tables

-   profiles
-   novels
-   chapters
-   genres
-   novel_genres
-   bookmarks
-   comments
-   reviews
-   ratings
-   reading_progress
-   reading_history
-   notifications
-   achievements
-   user_achievements
-   xp_transactions
-   coins
-   missions
-   author_followers
-   collections
-   collection_items

## Long-Term Goal

Create a platform where readers return daily because the experience is
engaging, personalized, and rewarding---not just because new chapters
are available.
