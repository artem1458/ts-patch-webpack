const ts = require('typescript');

module.exports = (program, config, transformerExtras) => {
    return context => sourceFile => {
        const visitor = (node) => {
            if (ts.isClassDeclaration(node)) {
                console.log('\nCustom transformer is working');

                const diagnostics = {
                    messageText: 'MyCustomTransformationError',
                    start: node.name.getStart(),
                    length: node.name.getWidth(),
                    code: 1,
                    file: sourceFile,
                    category: ts.DiagnosticCategory.Error,
                    source: 'CustomError',
                    relatedInformation: undefined,
                }

                transformerExtras.addDiagnostic(diagnostics);
            }

            return ts.visitEachChild(node, visitor, context);
        };

        return ts.visitNode(sourceFile, visitor);
    }
}
