import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Gemini CLI Button extension is active');

	const disposable = vscode.commands.registerCommand('gemini-button.run', () => {
		const terminal = vscode.window.createTerminal({ name: `Gemini CLI`, location: { viewColumn: vscode.ViewColumn.Beside } });
		terminal.sendText('gemini');
		terminal.show();
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}

