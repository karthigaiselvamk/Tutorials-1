
import pygame

from settings import Settings
from ship import Ship
import game_functions as gf


def run_game():
    """Runs the game"""
    
    # Initialize game and create screen object
    pygame.init();
    ai_settings = Settings()
    
    screen = pygame.display.set_mode(
        (ai_settings.screen_width, ai_settings.screen_height))
    pygame.display.set_caption("Alien Invasion")

    # Make a ship.
    ship = Ship(ai_settings, screen)
        
    # Main loop
    while True:
        # Keyboard and mouse events
        gf.check_events(ship)
        
        # Update ship position
        ship.update()
        
        # Update the screen with graphics
        gf.update_screen(ai_settings, screen, ship)

        
run_game()