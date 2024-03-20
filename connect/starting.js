//@rifza.p.p
const { exec } = require('child_process')
const figlet = require('figlet')
const { chalk, color, bgcolor, ConsoleLog, biocolor } = require('../library/color')
const { forks, start, info, success, banner, close } = require('../library/Fauzi')

const term = require('terminal-kit').terminal 
const loading = async () => {
var progressBar , progress = 0 ;
function doProgress()
{
    progress += Math.random() / 10 ;
	progressBar.update( progress ) ;	
	if ( progress >= 1 )
	{
     setTimeout( function() { console.clear(),
     exec(`screenfetch -A Deepin`, (error, stdout, stderr) => {
     
     console.log(stdout), console.log(bgcolor('Succes Run, Script Bot by xZiyy', 'gray')),
     console.log(color(figlet.textSync('SAINT BOT', {
      font: 'Standard',
      horizontalLayout: 'default',
      vertivalLayout: 'default',
      whitespaceBreak: false
     }), 'green'))})
    forks('1', '[⏳]...')
    }, 200 ) ;
	} else {
      setTimeout( doProgress , 90 + Math.random() * 200 ) ;
    }     
}

 progressBar = term.progressBar( { width: 80, title: '\n\nLoad this script....', eta: true, percent: true } );

doProgress ()


}
module.exports = { loading }