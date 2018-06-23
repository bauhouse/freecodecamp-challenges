/*--------------------------------*/
/* Markdown Previewer             */
/*--------------------------------*/
/* by Stephen Bau                 */
/*--------------------------------*/

var markdown = document.getElementById('editor').value;
var preview = document.getElementById('preview').innerHTML = marked(markdown);
