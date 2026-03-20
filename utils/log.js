export const displayFancyLogs = () => {
  console.log(
    "%c   ___                ____        _\n  / _ \\ _ __ ___      |  _ \\ __ _| |__   __ _ _ __   ___\n | | | | '_ ` _ \\_____| |_) / _` | '_ \\ / _` | '_ \\ / _ \\\n | |_| | | | | | |_____|  _ < (_| | | | | (_| | | | |  __/\n  \\___/|_| |_| |_|     |_| \\_\\__,_|_| |_|\\__,_|_| |_|\\___|\n",
    "color: #6b17e8;",
  );
  console.log(
    "%c Hope you like what you see :)",
    "color: #6b17e8; padding: 6px;",
  );

  // Easter egg hint
  console.log(
    "%c 💡 Psst! There's a secret hiding in plain sight. Follow your heart, it might lead to something... interesting.",
    "color: #6b17e8; font-style: italic; padding: 6px;",
  );
};
