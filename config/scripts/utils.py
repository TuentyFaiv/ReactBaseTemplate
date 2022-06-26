import platform
from os import path
from dotenv import dotenv_values

# Colors for console
class colors:
  reset="\033[0m"
  bold="\033[01m"
  disable="\033[02m"
  underline="\033[04m"
  reverse="\033[07m"
  strikethrough="\033[09m"
  invisible="\033[08m"

  class fg:
    black="\033[30m"
    red="\033[31m"
    green="\033[32m"
    orange="\033[33m"
    blue="\033[34m"
    purple="\033[35m"
    cyan="\033[36m"
    lightgrey="\033[37m"
    darkgrey="\033[90m"
    lightred="\033[91m"
    lightgreen="\033[92m"
    yellow="\033[93m"
    lightblue="\033[94m"
    pink="\033[95m"
    lightcyan="\033[96m"
  class bg:
    black="\033[40m"
    red="\033[41m"
    green="\033[42m"
    orange="\033[43m"
    blue="\033[44m"
    purple="\033[45m"
    cyan="\033[46m"
    lightgrey="\033[47m"

# Get the current platform
os_name = platform.system()
slash = "\\" if os_name.lower() == "windows" else "/"

# Paths
path_scripts = path.dirname(__file__)
path_texts = f"{path_scripts}{slash}texts"
path_root = f".{slash}"
path_root = path.abspath(path_root)

# Environment variables
config = {
  **dotenv_values(".env.development")
}

# Messages
ERROR_MESSAGE = f"""



    {colors.bold}{colors.fg.purple}A bueno tons chingo mi madre :/{colors.reset}



"""