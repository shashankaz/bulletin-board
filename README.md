# Bulletin Board Chrome Extension

## Overview
Bulletin Board is a Chrome extension built using React that provides a digital notice board with various widgets to enhance productivity and provide useful information. The extension includes features such as a Google Slide integration, Pomodoro Timer, weather updates, popular sites, announcements, and more.

## Features
- **Side Pane:** Displays the current date and time, weather updates, popular sites, announcements, and productivity tips.
- **Widgets:**
  - Quotes
  - Google Slide
  - Pomodoro Timer
  - Google Spreadsheet
  - Google Form
  - Music
  - Polls
  - Issue Tracker
  - DGC (Daily Goal Check)
  - Opportunity Board
- **Settings:** Manage widget visibility, update Spotify playlist URL, and set location for weather updates.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/shashankaz/bulletin-board.git
   cd bulletin-board
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```
4. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (top right corner)
   - Click "Load unpacked" and select the `build` folder in your project directory
