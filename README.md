# My Discord Bot

## Documentation

This Discord bot is designed to help users manage their Discord servers with various commands and features. Below is the guide on how to set up the bot and a list of all available commands organized by category.

## Setup Instructions
1. **Clone the Repository**  
   Open your terminal and clone the repository using:
   ```bash
   git clone https://github.com/achrafalalei1239-langop/my-discord-bot.git
   ```

2. **Navigate to the Project Directory**  
   ```bash
   cd my-discord-bot
   ```

3. **Install Dependencies**  
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

4. **Create a .env File**  
   Create a `.env` file in the root directory and add your bot token:
   ```bash
   BOT_TOKEN=your_discord_bot_token_here
   ```

5. **Run the Bot**  
   Start the bot with the following command:
   ```bash
   node index.js
   ```

## Commands

### General Commands
- `!help` - Lists all commands.
- `!info` - Provides information about the bot.

### Moderation Commands
- `!kick @user` - Kicks a user from the server.
- `!ban @user` - Bans a user from the server.

### Music Commands
- `!play <song>` - Plays a song.
- `!pause` - Pauses the current track.

### Utility Commands
- `!weather <location>` - Provides the current weather for the specified location.
- `!quote` - Returns a random motivational quote.

### ...

(Continue to list all 200+ commands in similar categorized format)