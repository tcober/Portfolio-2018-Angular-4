<?php 
header('Content-Type: application/json');

require('StormTwitter.class.php');

$config = array(
  'directory' => '', //The path used to store the .tweetcache cache file.
  'key' => 'HoOr6Jn1qxGeIVzaXAsAN5tD6',
  'secret' => 'QiGPVmTRYKAzoR7XjO6Ti0Sd4ovMpkwDKRmOQtu2ALBbZcG7nh',
  'token' => '824327684582838272-dB3hZBntCZmS522hNiCMoJsUItXyjjf',
  'token_secret' => 'PsgoweVbUIcJN0IlLOhQUy99ssKr2zoenxPkPyvMjTHk4',
  'screenname' => 'ThomasCober', //This is now deprecated and you shouldn't define this - but it's here for backwards compatibility
  'cache_expire' => 3600 //The duration of the cache  
);

$twitter = new StormTwitter($config);

// getTweets is the only public method. For legacy reasons, it takes between 0 and 3 parameters.
// getTweets(twitter_screenname, number_of_tweets, custom_parameters_to_go_twitter);

$tweets = $twitter->getTweets('ThomasCober', 1);

echo json_encode($tweets);

?>