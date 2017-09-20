# Sample Telegram/Serverless site

Deploy your [Serverless](https://serverless.com) code and a Telegram static web site as an atomic unit.

Why?

* URL proxying from site to AWS so no CORS and stable URLs
* Atomic deploys of web site and Serverless code -- once and done
* Makes your workflow that much easier so you can focus on the app.

## How does it work

The Telegram site is [rendered](https://github.com/telegr-am/renderers)
using the `passthru` renderer which just copies all the files from
the source to the destination.

The `/_serverless` directory is moved out of the main HTML input. Once
the HTML is processed, the Serverless app is deployed.

## What the code does

The web app does a jQuery `GET` request to `/api/time` to get
the current time. The current time is served from the
AWS Lambda server. The function is defined in `/_serverless/handler.js`.

There's an example of POSTing data to the current
server and having the POST data proxied to Amazon.

## Doing it yourself

* Fork this project
* Sign up with [Telegram](https://telegr.am)
* Create a new Telegram project by clicking on the "Add public Git respository site" button
* Choose a site name (e.g. `serverlesstest1`)
* Enter the Git URL for the cloned project
* Click "Finish"
* The initial render of the site will fail because you have not entered your IAM credentials
* Click the "Secret" button associated with the project and copy the key and IV provided to a secure place (it will not be displayed again)
* [Create IAM credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
* copy the `serverless_conf.sample` file to a place outside the project and enter your IAM credentials
* Execute `openssl aes-256-cbc -a -in serverless_conf -out myproj/_serverless/serverless_conf.telegram.enc -K '<ENTER KEY HERE>' -iv '<ENTER IV HERE>`
* Git commit and push, then click the "Refresh Site" button and you'll have a new, working site



## License

MIT

Copyright (c) 2017 David Pollak

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
