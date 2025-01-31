<template>
  <div>
    <h1><span>{{ $t('command-line.title') }}</span></h1>

    <section id="terminal">
      <div class="terminal" @click="focusInput">
        <!-- Display command prompt and output -->
        <div class="output">
          <div v-for="(line, index) in output" :key="index" class="output-line" v-html="line"></div>
        </div>

        <div class="terminal-prompt">
          <span class="username">user@machine</span>
          <span class="path">{{ currentPath }}</span>
          <span class="prompt">></span>
          <input ref="commandInput" v-model="currentCommand" @keyup.enter="executeCommand" type="text"
            class="command-input" autofocus />
        </div>
      </div>
    </section>

    <p v-html="$t('command-line.description')" />
  </div>
</template>

<script>
import terminalFiles from '../assets/terminal-files.json';
import enWebsiteText from '../assets/en.json';
import frWebsiteText from '../assets/fr.json';

export default {
  data() {
    return {
      currentCommand: '',
      output: [],
      currentPath: ' ~/Documents',
      files: [],
      websiteText: {}, // Will store the current language's website text
    };
  },
  created() {
    // Set the website text based on the current i18n language
    this.setWebsiteText(this.$i18n.locale);

    // Combine terminal files and website text into a single array
    this.files = [
      ...terminalFiles,
      ...this.convertWebsiteTextToFiles(this.websiteText),
    ];
  },
  watch: {
    // Watch for changes in the i18n locale and update the website text
    '$i18n.locale'(newLocale) {
      this.setWebsiteText(newLocale);
      this.updateFiles();
    },
  },
  methods: {
    setWebsiteText(locale) {
      this.websiteText = locale === 'fr' ? frWebsiteText : enWebsiteText;
    },
    updateFiles() {
      this.files = [
        ...terminalFiles,
        ...this.convertWebsiteTextToFiles(this.websiteText),
      ];
    },
    convertWebsiteTextToFiles(websiteText) {
      const files = [];
      for (const page in websiteText) {
        const pageContent = JSON.stringify(websiteText[page], null, 2); // Convert to pretty-printed JSON
        files.push({
          name: `${page}.json`, // Create a file for each page (e.g., home.json, about-me.json)
          content: pageContent,
        });
      }
      return files;
    },
    executeCommand() {
      const command = this.currentCommand.trim();

      // Construct the full prompt with username, path, and command
      const fullPrompt = `
    <span class="username">user@machine</span>
    <span class="path">${this.currentPath}</span>
    <span class="prompt">></span>
    <span class="command">${command}</span>
  `;

      this.output.push(fullPrompt);

      // Command output
      if (command === 'ls') {
        const fileList = this.files.map(file => `<span class="output-line">${file.name}</span>`).join('');
        this.output.push(fileList);
      } else if (command === 'help') {
        this.output.push(
          `
      <span class="output-line">Available commands:</span>
      <span class="output-line">help</span>
      <span class="output-line">clear</span>
      <span class="output-line">ls</span>
      <span class="output-line">cat [filename]</span>
      `
        );
      } else if (command === 'clear') {
        // Clear the output when 'clear' is entered
        this.output = [];
      } else if (command.startsWith('cat ')) {
        const filename = command.split(' ')[1];
        if (filename) {
          const file = this.files.find(file => file.name === filename || file.name === `${filename}.txt` || file.name === `${filename}.json`);
          if (file) {
            const contentWithBreaks = file.content.replace(/\n/g, '<br>');
            this.output.push(`<span class="output-line">${contentWithBreaks}</span>`);
          } else {
            this.output.push(`<span class="output-line">cat: ${filename}: No such file or directory</span>`);
          }
        } else {
          this.output.push(`
        <span class="output-line">Usage: cat [filename]</span>
        <span class="output-line">Example: cat file1.txt</span>
        <span class="output-line">Example: cat home.json</span>
      `);
        }
      } else {
        this.output.push(`<span class="output-line">zsh: command not found: ${command}</span>`);
      }

      // Scroll to the bottom
      this.$nextTick(() => {
        const terminalOutput = this.$el.querySelector('.terminal');
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
      });

      // Clear the command input
      this.currentCommand = '';
    },

    focusInput() {
      // Focus the input field
      this.$refs.commandInput.focus();
    },
  },
};
</script>

<!-- had to remove scoped here TwT -->
<style>
#terminal {
  margin-bottom: 30px;
}

.terminal {
  width: 100%;
  height: 50vh;
  height: 50vh;
  overflow-y: auto;
  text-align: left;
  font-family: 'Courier New', Courier, monospace;
  background-color: rgba(21, 29, 36, 0.4);
  border: 3px solid #6785bf55;
  border-radius: 18px;
  padding: 1rem;
  color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.terminal-prompt {
  color: #a0a0a0;
  display: inline-flex;
  white-space: nowrap;
  align-items: center;
  gap: 8px;
}

.username {
  color: #68a0a7;
}

.path {
  text-align: center;
  white-space: nowrap;
}

.prompt {
  color: #c6c6c6;
}

.output-line {
  display: block;
  color: #b0b0b0;
  word-wrap: break-word;
}

.command-input {
  width: auto;
  border: none;
  background: transparent;
  color: white;
  outline: none;
  font-size: 1rem;
  font-family: inherit;
}

.command-input:focus {
  border: none;
  background: transparent;
}

.command {
  color: #68a0a7;
}

@media (max-width: 768px) {
  div {
    max-width: 100%;
    width: 100%;
    overflow-x: auto;
  }
}
</style>
