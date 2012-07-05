Aria.classDefinition({
    $classpath: "tests.snippets.intro.SgtGreeters",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.intro.view.SgtGreeters",
                data : { people : [] }
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});