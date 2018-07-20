# Install webview tile template

## iOS

* Create new folder or rename the existing folder containing the tile files into the same name as tile id
  * example `moduware.tile.speaker`
* Put tile files in inside that new folder if you created a new folder
  * Tile id uses reverse domain notation as following entity format: "namespace".**tile**."name" - where **tile** is a requiered type
  * See this example of folder structure for LED tile, nexpaq.**tile**.led

    ![tile_file_structure]

  * Tile folder MUST contain at the very least these 3 files
    * "manifest.json"
    * "icon.svg"
    * "index.html"

* Use iTunes to install custom tile on iPhone

* Connect phone to computer and open up iTunes

* Select phone icon and *Apps* on the left side menu

![select_phone_itunes]

* Under *File Sharing* select moduware

* Drag and drop folder containing tile files into `Moduware Documents`

![itunes_drag_and_drop]

* Restart Moduware iOS app after installing customized tiles

## Android

* Create new folder or rename the existing folder containing the tile files into the same name as tile id
  * example `moduware.tile.led`
  * Tile id uses reverse domain notation as following entity format: "namespace".**tile**."name" - where **tile** is a requiered type
  * See this example of folder structure for LED tile, nexpaq.**tile**.led

    ![tile_file_structure]

  * Tile folder MUST contain at the very least these 3 files
    * "manifest.json"
    * "icon.svg"
    * "index.html"

* Connect phone to computer

* Use *File Manager* or *Android File Transfer* (for Mac OS)

* Create *moduware* directory/folder on phone's hard drive

* Copy the tile files into *moduware* folder

![moduware_folder_path_and_structure]

* Restart Moduware Android app after installing customized tiles

[select_phone_itunes]:images/select_phone_in_itunes.png
[itunes_drag_and_drop]:images/itunes_drag_and_drop.png
[tile_file_structure]:images/tile_file_structure.png
[moduware_folder_path_and_structure]:images/moduware_folder_path_and_structure.png
