chrome.commands.onCommand.addListener(function (command) {
  if (command === "click_new_memo_button") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: `
          (function() {
            const targetButton = Array.from(document.querySelectorAll('div[role="button"]'))
              .find(button =>
                button.textContent.trim() === '新規' &&
                button.style.backgroundColor === 'rgb(35, 131, 226)' &&
                button.style.cursor === 'pointer' &&
                button.style.display === 'flex' &&
                button.style.alignItems === 'center' &&
                button.style.justifyContent === 'center'
              );
            if (targetButton) {
              targetButton.click();
            }
            console.log('targetButton', targetButton);
          })();
          `,
      });
    });
  }
});

chrome.commands.onCommand.addListener(function (command) {
  if (command === "click_tab") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: `
          (function() {
            const propertyValueDiv = document.querySelector('div[data-testid="property-value"]');
            
            if (propertyValueDiv) {
              propertyValueDiv.click();
              console.log('propertyValueDiv clicked', propertyValueDiv);
            }
          })();
        `,
      });
    });
  }
});
