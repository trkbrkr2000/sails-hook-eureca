/**
 * Created by Jim on 7/10/16.
 * Main Hook for Eureca.io
 */

var path = require('path');
var fs = require('fs');
var Eureca = require('eureca.io');
var camelCase = require('camel-case');

function checkDirectorySync(directory) {
    try {
        fs.statSync(directory);
    } catch (e) {
        fs.mkdirSync(directory);
    }
}

module.exports = function eureca(sails) {
    return {
        defaults: {
            __configKey__: {
                prefix: 'eureca.io',
                onConnect: function () {
                },
                onDisconnect: function () {
                },
                onMessage: function () {
                },
                onError: function () {
                }
            }
        },
        configure: function () {


        },
        initialize: function (cb) {
            var self = this;



            checkDirectorySync(path.join(sails.config.appPath, 'api', 'eureca'))
            self.server = new Eureca.Server({});
            self.server.attach(sails.hooks.http.server);

            fs.readdirSync(path.join(sails.config.appPath, 'api', 'eureca')).forEach(function (file) {
                self.server.exports[camelCase(path.basename(file, '.js'))] = require(path.join(sails.config.appPath, 'api', 'eureca', file));
            });

            self.server.onConnect(sails.config[this.configKey].onConnect);
            self.server.onConnect(sails.config[this.configKey].onDisconnect);
            self.server.onConnect(sails.config[this.configKey].onMessage);
            self.server.onConnect(sails.config[this.configKey].onError);

            return cb();

        }
    };
};
