# Url Shortner MicroService

## User Stories
  
User Story: I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.

User Story: If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.

User Story: When I visit that shortened URL, it will redirect me to my original link.

## Examples of short url creation:
<a href="/new/http://www.google.com">
  http://rvg-url-shortner.herokuapp.com/new/http://www.google.com
</a>

<a href="/new/http://www.freecodecamp.com/news">
  http://rvg-url-shortner.herokuapp.com/new/http://www.freecodecamp.com/news
</a>


## Example Output
<code>{"original_url":"http://www.freecodecamp.com/news","short_url":"http://rvg-url-shortner.herokuapp.com/"}</code>


## Example Usage</h2>
<span>The url:</span>
<div>
   <code>http://rvg-url-shortner.herokuapp.com/fyoVs</code>
</div>

<span>Will Redirect to:</span>
<div>
   <code>http://www.freecodecamp.com/news</code>
</div>
