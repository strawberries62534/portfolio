<template>
  <div>
    <h1><span>Command line</span></h1>

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

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea blanditiis ducimus exercitationem explicabo ab, quam
      delectus aliquam est et culpa, dolores hic? Commodi eveniet minima praesentium facilis nesciunt velit ex.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentCommand: '',
      output: [],
      currentPath: ' ~/Documents',
    };
  },
  methods: {
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
        this.output.push(
          `<span class="output-line">file1.txt</span><span class="output-line">file2.md</span><span class="output-line">dir1</span>`
        );
      } else if (command === 'help') {
        this.output.push(
          `
          <span class="output-line">Available commands:</span>
          <span class="output-line">help</span>
          <span class="output-line">clear</span>
          <span class="output-line">ls</span>
          `
        );
      } else if (command === 'clear') {
        // Clear the output when 'clear' is entered
        this.output = [];
      } else {
        this.output.push(`<span class="output-line">zsh: command not found: ${command}</span>`);
      }

      // Scroll to the latest output
      this.$nextTick(() => {
        const terminalOutput = this.$el.querySelector('.output');
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
</style>
