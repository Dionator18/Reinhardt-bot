const Discord = require('discord.io');
const logger = require('winston');
const auth = require('./auth.json');

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const bot = new Discord.Client({
    token: auth.token,
    autorun: true,
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');

    bot.setPresence({
        game: {
            name: "Overwatch"
        }
    });
});

bot.on('message', function (user, userID, channelID, message, evt) {

    if (message.substring(0, 1) === '/') {
        let args = message.substring(1).split(' ');
        let cmd = args[0];

        // args = args.splice(1);
        switch (cmd) {
            case 'banana':
                bot.sendMessage({
                    to: channelID,
                    message: 'No, I do NOT want a banana.',
                    typing: true
                });
                break;
        }
    }
    if (message.match(/Shield me/i)) {
        bot.sendMessage({
            to: channelID,
            message: 'Don\'t worry, my friends! I am your shield!'
        });
    }
    if (message.match(/Reinhardt/i)) {
        if (userID === "197416203441012739") {
            bot.sendMessage({
                to: channelID,
                message: "Im trying to shield IMPORTANT people here " + user + ' and your not one of them, so **** off.'
            })
        } else {
            if (userID === "367619235528310785") {
                bot.sendMessage({
                    to: channelID,
                    message: 'Reinhardt at your service, Master.'
                });
            }else {
                if (userID !== "386109159705149440") {
                    switch (getRandomNumber(1, 6)) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            bot.sendMessage({
                                to: channelID,
                                message: 'Reinhardt at your service, ' + user + '.',
                            });
                            break;
                        case 5:
                            bot.sendMessage({
                                to: channelID,
                                message: 'Again! AGAIN!',
                            });
                            break;
                    }
                }
            }
        }
    }
    if (message.match(/What are the most importent things in the world?/i)) {
        bot.sendMessage({
            to: channelID,
            message: 'Honor! Justice! Reinhardt, Reinhardt, REINHARDT!',
            typing: true
        })
    }
    if (message.match(/he dion/i)) {
        bot.sendMessage({
            to: channelID,
            message: 'Don\'t even try and hurt my friend ' + user + ', get behind me Dionator!',
        });
        bot.uploadFile({
            to: channelID,
            file: 'reinhardt.gif'
        })
    }
    if (message.match(/beer/i)) {
        if (userID !== "386109159705149440") {
            bot.sendMessage({
                to: channelID,
                message: '' + user + ' would never beat me in a beer contest, 100% GERMAN POWER!',
                typing: true
            })
        }
    }
});