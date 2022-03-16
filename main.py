from flask import Flask, render_template, request, redirect, url_for, session
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re

app = Flask(__name__)

# Change this to your secret key (can be anything, it's for extra protection)
app.secret_key = 'icytorsecret'

# Enter your database connection details below
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'tor1q2w3e4r5t'
app.config['MYSQL_DB'] = 'pythonlogin'

# Intialize MySQL
mysql = MySQL(app)

# Routes
@app.route('/login/', methods=['GET', 'POST'])
def login():
    # Output message if something goes wrong...
    msg = 'asdfsadf'

    if request.method == 'POST' and 'username' in request.form and 'password' in request.form:
    	# Create variables for easy access
        username = request.form['username']
        password = request.form['password']
        # Check if account exists using MySQL
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM accounts WHERE username = %s AND password = %s', (username, password,))
        # Fetch one record and return result
        account = cursor.fetchone()
        # If account exists in accounts table in out database
        if account:
            # Create session data, we can access this data in other routes
            session['loggedin'] = True
            session['id'] = account['id']
            session['username'] = account['username']
            # Redirect to home page
            return redirect('/')
        else:
            # Account doesnt exist or username/password incorrect
            msg = 'Incorrect username/password!'

    return render_template('index.html', msg='')

@app.route('/login/logout')
def logout():
    # Remove session data, this will log the user out
   session.pop('loggedin', None)
   session.pop('id', None)
   session.pop('username', None)
   # Redirect to login page
   return redirect(url_for('login'))

@app.route('/')
def home():
   return render_template('home.html')

@app.route('/habit-tracker')
def habit_tracker():
   return render_template('habit-tracker.html')

@app.route('/gratitude-journal')
def gratitude_journal():
   return render_template('gratitude-journal.html')

@app.route('/time-table')
def time_table():
   return render_template('time-table.html')

if __name__ == '__main__':
    app.run()