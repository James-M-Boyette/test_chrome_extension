// This contains our notes on the manifest.json file; as-such, it is a .js file in order to facilitate comments etc



// Purpose of manifest.json: has all details of our extension
{
    "manifest_version": 2, // What version of chrome's manifest this extension uses
    // Note: v2 is depreciated and v3 is now the standard; this demo & Prentus are both v2, however, so we'll stick with that
    "name": "", // What you want to name your extension
    "description": "", // The description of your extension
    "version": "", // The current development version of your extension
    "icons": { // The icon to be displayed in Chrom's cards (on "extensions" page)
        "16": "",
        "48": "",
        "128": "",
    },
    "page_action": { // The icon to be displayed in Chrome's upper-right bar/the drop-down menu
        "default_icon": {
            "16": "",
            "48": "",
            "128": "",
        }
    },
    "content_scripts": [{}] // This looks for domains to trigger the extension
    // Note: Turn this off if you're following the video - he adds images first to make sure the icons etc show
}



// Note: every time you make a change to your local extension's files, you need to refresh by clicking the icon on the extension card