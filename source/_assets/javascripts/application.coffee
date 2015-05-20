#= require vendor/jquery
#= require vendor/jquery.fittext
#= require_tree .

class GoogleAnalytics
  @init: (webPropertyId) ->
    @_initQueue webPropertyId
    scriptTag = @_createScriptTag()
    @_injectScriptTag scriptTag
    true

  @_initQueue: (webPropertyId) ->
    window._gaq ?= []
    window._gaq.push ['_setAccount', webPropertyId]
    window._gaq.push ['_trackPageview']

  @_createScriptTag: ->
    scriptTag = document.createElement 'script'
    scriptTag.type = 'text/javascript'
    scriptTag.async = true
    protocol = location.protocol
    scriptTag.src = "#{ protocol }//stats.g.doubleclick.net/dc.js"
    scriptTag

  @_injectScriptTag: (scriptTag) ->
    firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore scriptTag, firstScriptTag

  @trackPageView: (url) ->
    window._gaq.push ['_trackPageview', url]

  @trackEvent: (category, action, label = null, value = null, nonInteraction = null) ->
    trackedEvent = ['_trackEvent', category, action]
    for argument in [label, value, nonInteraction]
      if argument? then trackedEvent.push argument else break
    window._gaq.push trackedEvent

$ ->
	GoogleAnalytics.init 'UA-1642439-34'
	
	$("h1").fitText(0.8)
	$("h2").fitText(0.8)
	
	$('li[itemprop="track"]').on "click", ->
	  GoogleAnalytics.trackPageView "#{ window.location.pathname }##{ this.id }"
	
	true
