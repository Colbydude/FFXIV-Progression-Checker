FFXIV Progression Checker
=========================

*I really couldn't think of a better name...*

This tool is used for quickly checking a character's raid progression in FFXIV. This saves the effort of having to actually go to the Lodestone and look things up. Information is collected using the [Lodestone API](https://github.com/viion/XIVPads-LodestoneAPI) and checks for certain achievements. However, keep in mind that this tool will not work of the specified character does not have achievements viewable to the public.

More functionality will be added in future updates. :D

**Website:** http://ffxiv.voidteam.net/progression/

Release Notes
-------------

*July 8th, 2014*
 - Added results for Syrcus Tower and Striking Tree EX (Ramuh).
 - Added results for the Second Coil of Bahamut (Savage). Note that the achievements for clearing indivdual turns are actually clears, instead of mapping achievements. There is also no overall clear achievement, so the number of clears will not be used.
 - Removed the number of clears from Labyrinth of the Ancients and Syrcus Tower.
 - Made the update date point to this README file.

*July 7th, 2014*

 - Made a slight change to the Lodestone API so I can associate each achievement by it's ID instead of the sequential number it's given. This way, when patches come out, I won't have to manually go through and figure out which achievement is which.

*July 6th, 2014*

 - Load data based on URL parameters.
 - URL automatically changes when the form is submitted (must have a compatible HTML5 browser).
 - BCoB and SCoB is broken down by each turn using the "Mapping of the Realm" achievements.
 - Results will now show all content, with uncleared instances marked in red.

*July 5th, 2014*
 - Initial Release.

Currently Planned Features
--------------------------

 - Get and display Character ilvl and gear.
 - Check progression based on gear if achievements are not public.
 - FC checks to calculate overall progression and average ilvl among members.
 - Add other notable achievements such as Relics, PVP Ranks, etc.
 - Add minimum iLvl as required by the game for each instance, as well as a "Recommended" iLvl by the community.