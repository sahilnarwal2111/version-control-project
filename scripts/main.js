const problems = {
    arrays: {
      description: "Find the maximum subarray sum using the Kadane's Algorithm.",
      solution: `
        <strong>Code:</strong>
        <pre>
  int maxSubArraySum(int a[], int size) {
    int max_so_far = a[0];
    int current_max = a[0];
    for (int i = 1; i < size; i++) {
      current_max = max(a[i], current_max + a[i]);
      max_so_far = max(max_so_far, current_max);
    }
    return max_so_far;
  }
        </pre>
      `
    },
    "linked-lists": {
      description: "Reverse a singly linked list.",
      solution: `
        <strong>Code:</strong>
        <pre>
  Node* reverseList(Node* head) {
    Node* prev = NULL;
    Node* current = head;
    Node* next = NULL;
    while (current != NULL) {
      next = current->next;
      current->next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }
        </pre>
      `
    },
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('load-problem').addEventListener('click', () => {
      const topic = document.getElementById('topic-select').value;
      const problemDiv = document.getElementById('problem-description');
      const solutionDiv = document.getElementById('solution');
  
      if (problems[topic]) {
        problemDiv.innerHTML = `
          <h2>Problem Description</h2>
          <p>${problems[topic].description}</p>
        `;
        solutionDiv.innerHTML = `
          <h2>Solution</h2>
          ${problems[topic].solution}
        `;
      } else {
        problemDiv.innerHTML = `<h2>Problem Description</h2><p>Please select a valid topic.</p>`;
        solutionDiv.innerHTML = `<h2>Solution</h2><p>The solution will appear here once a problem is selected.</p>`;
      }
    });
  });
  