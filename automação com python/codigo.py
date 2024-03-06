import pyautogui
import time
pyautogui.PAUSE = 0.5




pyautogui.press("win")
pyautogui.write("Edge")
pyautogui.press("enter")

link = "https://dlp.hashtagtreinamentos.com/python/intensivao/login"
pyautogui.write(link)
pyautogui.press("enter")
time.sleep(3)

pyautogui.click(x=649, y=447)
pyautogui.write("jogueporcinco@gmail.com")


pyautogui.press("tab")
pyautogui.write("Caio123@")



pyautogui.click(x=468, y=608)
time.sleep(3)
