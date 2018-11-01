function doGet() {
  return HtmlService.createTemplateFromFile('index')
  .evaluate()
  .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}
function enumerateFiles(startPath,mime , recurse) {
  // DriveApp.getFiles()
  var start = new Date().getTime();
  var pile = cUseful.DriveUtils
  .setService(DriveApp)
  .getPileOfFiles (startPath,mime , recurse);
  
  return {
    results:pile.map (function(d) {
      return {
        folderId:d.folder.getId(),
        fileId:d.file.getId(),
        path:d.path
      };
    }),
    elapsed:new Date().getTime() - start
  };

}
