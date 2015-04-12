angular.module('cacheLoader', ['ng-templates/friend-detail.html', 'ng-templates/stories-new.html', 'ng-templates/story-detail.html', 'ng-templates/tab-account.html', 'ng-templates/tab-dash.html', 'ng-templates/tab-friends.html', 'ng-templates/tab-stories.html', 'ng-templates/tabs.html']);

angular.module("ng-templates/friend-detail.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("ng-templates/friend-detail.html",
    "<ion-view view-title=\"Friend: {{ friend.name }}\">\n" +
    "  <ion-content>\n" +
    "    <div class=\"card\">\n" +
    "      <div class=\"item item-divider\">\n" +
    "        {{ friend.name }}\n" +
    "      </div>\n" +
    "      <div class=\"item item-text-wrap\">\n" +
    "        Friend Text {{ friend | json }}\n" +
    "      </div>\n" +
    "      <div class=\"item item-divider\">\n" +
    "        id = {{ friend. id }}\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("ng-templates/stories-new.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("ng-templates/stories-new.html",
    "<ion-view view-title=\"Stories::New\">\n" +
    "  <ion-content>\n" +
    "    <div class=\"page-frame\">\n" +
    "      <div class=\"page-frame-head\">\n" +
    "        <div class=\"web-only\">\n" +
    "          <button class=\"button button-full button-assertive\" ng-click=\"saveStory()\">\n" +
    "            Create Story\n" +
    "          </button>\n" +
    "          <a class=\"button button-full \" href=\"#/tab/stories\">\n" +
    "            Cancel\n" +
    "          </a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"page-frame-body\">\n" +
    "        <ion-list class=\"form-list\">\n" +
    "          <label class=\"item item-input item-stacked-label\">\n" +
    "            <span class=\"input-label\">Title</span>\n" +
    "            <input type=\"text\" required min=\"4\" placeholder=\"Title\" ng-model=\"newStory.title\">\n" +
    "          </label>\n" +
    "          <label class=\"item item-input item-stacked-label\">\n" +
    "            <span class=\"input-label\">Description</span>\n" +
    "            <textarea required rows=\"10\" placeholder=\"Description\" ng-model=\"newStory.description\"></textarea>\n" +
    "          </label>\n" +
    "          <label class=\"item item-input item-stacked-label item-select\">\n" +
    "            <span class=\"input-label\">Genre</span>\n" +
    "            <select ng-model=\"newStory.genre\"\n" +
    "                    ng-options=\"id as label for (id, label) in genres\">\n" +
    "            </select>\n" +
    "          </label>\n" +
    "        </ion-list>\n" +
    "        <div class=\"even-rows mobile-only\">\n" +
    "          <div class=\"part halves\">\n" +
    "            <button class=\"button button-full button-assertive\" ng-click=\"saveStory()\">\n" +
    "              Create Story\n" +
    "            </button>\n" +
    "          </div>\n" +
    "          <div class=\"part halves\">\n" +
    "            <a class=\"button button-full part\" href=\"#/tab/stories\">\n" +
    "              Cancel\n" +
    "            </a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <pre>\n" +
    "      {{ newStory | json }}\n" +
    "    </pre>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("ng-templates/story-detail.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("ng-templates/story-detail.html",
    "<!--\n" +
    "  This template loads for the 'tab.friend-detail' state (app.js)\n" +
    "  'friend' is a $scope variable created in the FriendsCtrl controller (controllers.js)\n" +
    "  The FriendsCtrl pulls data from the Friends service (service.js)\n" +
    "  The Friends service returns an array of friend data\n" +
    "-->\n" +
    "<ion-view view-title=\"{{chat.name}}\">\n" +
    "  <ion-content class=\"padding\">\n" +
    "    <img ng-src=\"{{chat.face}}\" style=\"width: 64px; height: 64px\">\n" +
    "    <p>\n" +
    "      {{chat.lastText}}\n" +
    "    </p>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("ng-templates/tab-account.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("ng-templates/tab-account.html",
    "<ion-view view-title=\"Account\">\n" +
    "  <ion-content>\n" +
    "    <ion-list>\n" +
    "    <ion-toggle  ng-model=\"settings.enableFriends\">\n" +
    "        Enable Friends\n" +
    "    </ion-toggle>\n" +
    "    </ion-list>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("ng-templates/tab-dash.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("ng-templates/tab-dash.html",
    "<ion-view view-title=\"Dashboard\">\n" +
    "  <ion-content class=\"padding\">\n" +
    "    <div class=\"list card\">\n" +
    "      <div class=\"item item-divider\">Recent Updates</div>\n" +
    "      <div class=\"item item-body\">\n" +
    "        <div>\n" +
    "          There is a fire in <b>sector 3</b>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"list card\">\n" +
    "      <div class=\"item item-divider\">Health</div>\n" +
    "      <div class=\"item item-body\">\n" +
    "        <div>\n" +
    "          You ate an apple today!\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"list card\">\n" +
    "      <div class=\"item item-divider\">Upcoming</div>\n" +
    "      <div class=\"item item-body\">\n" +
    "        <div>\n" +
    "          You have <b>29</b> meetings on your calendar tomorrow.\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("ng-templates/tab-friends.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("ng-templates/tab-friends.html",
    "<ion-view view-title=\"Friends\">\n" +
    "  <ion-content>\n" +
    "    <ion-list>\n" +
    "      <ion-item class=\"item-remove-animate item-avatar item-icon-right\" ng-repeat=\"friend in friends\"\n" +
    "                type=\"item-text-wrap\" href=\"#/tab/friends/{{friend.id}}\">\n" +
    "        <img ng-src=\"{{friend.face}}\">\n" +
    "        <h2>{{friend.name}}</h2>\n" +
    "        <p>{{friend.lastText}}</p>\n" +
    "        <i class=\"icon ion-chevron-right icon-accessory\"></i>\n" +
    "\n" +
    "        <ion-option-button class=\"button-assertive\" ng-click=\"remove(friend)\">\n" +
    "          Delete\n" +
    "        </ion-option-button>\n" +
    "      </ion-item>\n" +
    "    </ion-list>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("ng-templates/tab-stories.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("ng-templates/tab-stories.html",
    "<ion-view view-title=\"Stories\">\n" +
    "  <ion-content>\n" +
    "    <div class=\"page-frame\">\n" +
    "      <div class=\"page-frame-head\">\n" +
    "        <a type=\"button\" class=\"button button-full button-assertive\" href=\"#/tab/stories-new\">\n" +
    "          Add a Story\n" +
    "        </a>\n" +
    "      </div>\n" +
    "      <div class=\"page-frame-body\">\n" +
    "        <ion-list>\n" +
    "          <ion-item class=\"item-remove-animate item-avatar item-icon-right\" ng-repeat=\"story in stories\"\n" +
    "                    type=\"item-text-wrap\" href=\"#/tab/stories/{{story.id}}\">\n" +
    "            <h2>{{story.title}}</h2>\n" +
    "\n" +
    "            <p one-line><b>{{ story.created | date: 'MMM d, yy' }} -- </b> {{story.description }}</p>\n" +
    "            <i class=\"icon ion-chevron-right icon-accessory\"></i>\n" +
    "\n" +
    "            <ion-option-button class=\"button-assertive\" ng-click=\"remove(story)\">\n" +
    "              Delete\n" +
    "            </ion-option-button>\n" +
    "          </ion-item>\n" +
    "        </ion-list>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("ng-templates/tabs.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("ng-templates/tabs.html",
    "<!--\n" +
    "Create tabs with an icon and label, using the tabs-positive style.\n" +
    "Each tab's child <ion-nav-view> directive will have its own\n" +
    "navigation history that also transitions its views in and out.\n" +
    "-->\n" +
    "\n" +
    "<ion-tabs class=\"{{ tab_classes }}\">\n" +
    "Tabs\n" +
    "  <!-- Dashboard Tab -->\n" +
    "  <ion-tab title=\"Status\" icon-off=\"ion-ios-pulse\" icon-on=\"ion-ios-pulse-strong\" href=\"#/tab/dash\">\n" +
    "    <ion-nav-view name=\"tab-dash\"></ion-nav-view>\n" +
    "  </ion-tab>\n" +
    "\n" +
    "  <!-- Chats Tab -->\n" +
    "  <ion-tab title=\"Stories\" icon-off=\"ion-ios-analytics-outline\" icon-on=\"ion-ios-analytics\" href=\"#/tab/stories\">\n" +
    "    <ion-nav-view name=\"tab-stories\"></ion-nav-view>\n" +
    "  </ion-tab>\n" +
    "\n" +
    "  <!-- Friends Tab -->\n" +
    "  <ion-tab title=\"Friends\" icon-off=\"ion-ios-chatboxes-outline\" icon-on=\"ion-ios-chatboxes\" href=\"#/tab/friends\">\n" +
    "    <ion-nav-view name=\"tab-friends\"></ion-nav-view>\n" +
    "  </ion-tab>\n" +
    "\n" +
    "  <!-- Account Tab -->\n" +
    "  <ion-tab title=\"Account\" icon-off=\"ion-ios-gear-outline\" icon-on=\"ion-ios-gear\" href=\"#/tab/account\">\n" +
    "    <ion-nav-view name=\"tab-account\"></ion-nav-view>\n" +
    "  </ion-tab>\n" +
    "</ion-tabs>\n" +
    "");
}]);
