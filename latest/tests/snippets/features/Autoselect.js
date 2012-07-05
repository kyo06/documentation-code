Aria.classDefinition({
    $classpath: "tests.snippets.features.Autoselect",
    $extends: "aria.jsunit.TestCase",

    $prototype: {

        testAsyncLoadTpl : function () {
            document.getElementById("TESTAREA").style.display="none";
            Aria.loadTemplate({
                div : "TESTAREA",
                classpath : "snippets.features.autoselect.Snippet"
            }, {
                fn : this.notifyTestEnd,
                scope : this
            });
        }

    }

});