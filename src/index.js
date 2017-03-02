import React from 'react';
import {render} from 'react-dom';
//import {HeaderCon, ResumeCon, ContactCon, Error404} from './components/App.jsx';
import {ResumeCon, AboutPresComp, SkillsPresComp, WorkPresComp, EducationPresComp, ContactPresComp, Error404} from './components/App.jsx';
import { Router, Route, hashHistory } from 'react-router';

window.React = React;

render (
    <Router history={hashHistory}>
        <Route path="/" component={ResumeCon}/>
        <Route path="profile" component={AboutPresComp}/>
        <Route path="skills" component={SkillsPresComp}/>
        <Route path="work" component={WorkPresComp}/>
        <Route path="education" component={EducationPresComp}/>
        <Route path="contact" component={ContactPresComp}/>
        <Route path="*" component={Error404}/>
    </Router>,
    document.getElementById('app')
)

{
    let myform = $("form#myform");
    let submitButton = myform.find('button');

    myform.submit(function(event) {
        event.preventDefault();
        submitButton.disabled = true;

        let params = myform.serializeArray().reduce(function(obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {});

        let service_id = "default_service";

        let template_id = "template_TXpTBgF3";
        submitButton.text("Sending...");
        emailjs.send(service_id, template_id, params)
            .then(function() {
                submitButton.text("Your email has been sent");
                setInterval(function() {
                    submitButton.disabled = false;
                    submitButton.text("Send");
                }, 3000);
            }, function(err) {
                alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
                console.log("Send email failed!\r\n Response:\n " + JSON.stringify(err));
                submitButton.text("Send");
            });
        return false;
    });
}

