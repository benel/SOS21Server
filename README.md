Actions
=======

* A character buys a glass yogurt pot

POST /

    {
      "character": "Galaad_II",
      "verb": "buyGlassYogurtPot",
      "timestamp": "2011-02-04 18:02:45",
      "place": "parisDairy",
      "effects": {
        "economy": -5,
        "environment": 5
      }
    }

* Effects on the character (aka points)

GET /effects_by_character/Galaad_II


* Effects on the place


GET /effects_by_place/parisDairy


* Effects on the whole world

GET /effects/


Locations
=========

* A character moves (or logs on)

GET /playable_character/Galaad_II

PUT /playable_character/Galaad_II
    {
      "_rev": "...",
      "loggedOn": true,
      "place": "parisDairy",
      "x": 26,
      "y": 18
    }


* Characters locations in a place

GET /characters_by_place/parisDairy


* Online characters sorted by the last time they moved

GET /away_from_keyboard


Ongoing actions and moves in a place
====================================

GET /_changes_on_place/parisDairy
    {"results":[
      ...
    ], "last_seq":133}

GET /_changes_on_place/parisDairy?since=133&include_docs=true
    {"results":[
      {"seq":134,"id":"Galaad_II","changes":[{"rev":"69-fff025faf303bcedadbbd34c6fb0eb37"}],"doc":{"_id":"Galaad_II","_rev":"69-fff025faf303bcedadbbd34c6fb0eb37","loggedOn":true,"place":"parisDairy","x":29,"y":17,"updatedAt":[2011,2,5,18,54]}}
    ], "last_seq":134}

