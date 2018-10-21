window.onload = function() {
        document.getElementById("slackButton").onclick = function sendToSlack() {
            {
                const xhr = new XMLHttpRequest();
                var author_name = "WWF";
                var title = document.getElementById("job_title").value;
                var title_link = "https://api.slack.com/";
                var text = document.getElementById("job_description").value;
                var job_type = document.getElementById("job_type").value;
                var job_email_contact = document.getElementById("job_email_contact").value;
                var job_salary = document.getElementById("job_salary").value;
                var job_location = document.getElementById("job_location").value;
                var unix_ts = Math.round(+new Date()/1000);


                xhr.open("POST", "https://hooks.slack.com/services/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", true);
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                // xhr.send(JSON.stringify({"text":"Hello, is it me you're looking for"}))

                xhr.send(JSON.stringify({"attachments": [
                        {
                            "fallback": "A job listing by CareerHubv2",
                            "color": "#2eb886",
                            "pretext": "An exciting new job opportunity has opened up:",
                            "author_name": author_name,
                            "title": title + ", " + job_location,
                            "title_link": title_link,
                            "text": text,
                            "fields": [
                                {
                                    "title": "Job type",
                                    "value": job_type,
                                    "short": true
                                },
                                {
                                    "title": "Salary",
                                    "value": job_salary,
                                    "short": true
                                },
                                {
                                    "title": "Contact",
                                    "value": job_email_contact,
                                    "short": true
                                }
                            ],
                            "footer": "CareerHubv2",
                            "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
                            "ts": unix_ts
                        }
                    ]
                }))
            }
            document.getElementById("slackButton").innerHTML = " Sent to Slack ";
            document.getElementById("slackButton").setAttribute("disabled", "true");
        }
    }
