#= require vendor/jquery
#= require vendor/jquery.fittext
#= require vendor/analytics
#= require_tree .

$ ->
	GoogleAnalytics.init 'UA-1642439-34'
	
	$("h1").fitText(0.9)
	$("h2").fitText(1.2)
	
	$("li.track").on "click", ->
		GoogleAnalytics.trackPageView '/track/'
	
	true
