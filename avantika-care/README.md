# Setup Instructions for Avantika Gastro Care Website

## Prerequisites
To run this website with full functionality (specifically the email form), you need a local server environment that supports PHP and email sending (like `sendmail`).

Common tools:
- **XAMPP** (Windows/Linux/Mac)
- **MAMP** (Mac/Windows)
- **Built-in PHP Server** (Linux/Mac)

## Quick Start (Linux/Mac Terminal)

1.  Open your terminal.
2.  Navigate to the project directory:
    ```bash
    cd /home/jitendra/projects/client-projects/avantika-care
    ```
3.  Start a local PHP server:
    ```bash
    php -S localhost:8000
    ```
4.  Open your browser and visit:
    `http://localhost:8000`

## Note on Email Testing
The `mail.php` script uses the standard PHP `mail()` function. 
- On a **local server** (like basic PHP -S), emails usually **won't send** unless you have configured a local mail server (like Postfix or Sendmail) or modified `php.ini` to use an SMTP server.
- However, the basic **form submission flow** (Javascript -> PHP -> Response) will work, and you should see the Success Alert on the content. The Javascript code handles errors gracefully for demo purposes.

## Deployment
For the live site, upload both `index.html`, `mail.php` and the `img` folder to your public folder (e.g., `public_html`) on your hosting provider.
