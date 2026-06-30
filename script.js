// ===== GROQ API CONFIGURATION =====
// ADD YOUR GROQ API KEY HERE: https://console.groq.com
const GROQ_API_KEY = "your api key"; // Replace with your Groq API key

// ===== WAIT FOR DOM TO LOAD =====
function initScript() {
  // ===== NAVBAR SCROLL =====
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  // ===== MOBILE MENU =====
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      document.body.style.overflow = mobileMenu.classList.contains("active")
        ? "hidden"
        : "";
    });
  }

  window.closeMobile = function () {
    if (hamburger) hamburger.classList.remove("active");
    if (mobileMenu) mobileMenu.classList.remove("active");
    document.body.style.overflow = "";
  };

  // ===== SCROLL REVEAL =====
  const revealElements = document.querySelectorAll(".reveal");

  const observerOptions = {
    threshold: 0.12,
    rootMargin: "0px 0px -60px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => observer.observe(el));

  // ===== CONTACT FORM =====
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const btn = this.querySelector(".form-submit");
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="ri-check-line"></i> Message Sent!';
      btn.style.background = "#22c55e";
      btn.style.color = "#fff";
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = "";
        btn.style.color = "";
        this.reset();
      }, 3000);
    });
  }

  // ===== CHATBOT WITH GROQ API =====
  const chatToggle = document.getElementById("chatbotToggle");
  const chatWindow = document.getElementById("chatbotWindow");
  const chatInput = document.getElementById("chatInput");
  const chatSend = document.getElementById("chatSend");
  const chatMessages = document.getElementById("chatMessages");

  console.log("Chatbot elements:", {
    chatToggle,
    chatWindow,
    chatInput,
    chatSend,
    chatMessages,
  });

  if (chatToggle && chatWindow) {
    chatToggle.addEventListener("click", () => {
      console.log("Chat toggle clicked");
      chatToggle.classList.toggle("active");
      chatWindow.classList.toggle("active");
      if (chatWindow.classList.contains("active") && chatInput) {
        chatInput.focus();
      }
    });
  }

  const botResponses = {
    services:
      "We offer Web Development, Mobile Apps, AI Solutions, UI/UX Design, Cloud Solutions, and Digital Transformation. What sounds relevant to your project?",
    web: "We build custom web applications with React, Next.js, and Node.js. Performance-first, zero bloat. Want to discuss your project?",
    mobile:
      "We build native and cross-platform mobile apps using React Native and Flutter. They feel right on every device.",
    ai: "Our AI work includes custom chatbots, predictive analytics, workflow automation, NLP, and ML model deployment. Practical AI that solves real problems.",
    design:
      "Our UI/UX design creates visual identities with genuine personality — from interfaces to full design systems.",
    cloud:
      "We provide scalable cloud infrastructure on AWS, GCP, and Azure. Secure, cost-effective, built to grow.",
    pricing:
      "Pricing is project-based and depends on scope. Email us at lance@weforgetechnologies.com and we'll give you a straight answer.",
    contact:
      "Reach us at lance@weforgetechnologies.com or use the contact form above. We respond within 24 hours.",
    process:
      "Our process: Discovery → Strategy → Build → Launch & Grow. Simple, transparent, no surprises.",
    hello: "Hey! Good to have you here. What can I help you with?",
    hi: "Hi! Feel free to ask about our services, process, or how we might help.",
    hey: "Hey there! What's on your mind?",
    thanks: "You're welcome! Let me know if there's anything else.",
    default:
      "Good question! For specifics, reach out to lance@weforgetechnologies.com. I can also tell you about our services, process, or pricing.",
  };

  // Get response from Groq API or fallback to local responses
  async function getBotResponse(userMessage) {
    // If Groq API key is configured, try to use it
    if (GROQ_API_KEY.trim()) {
      try {
        const response = await fetch(
          "https://api.groq.com/openai/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${GROQ_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "llama-3.3-70b-versatile",
              messages: [
                {
                  role: "system",
                  content:
                    "You are a helpful assistant for WeForge Technologies, a digital craftsmanship studio. Be professional, concise, and helpful. If asked about services, mention: Web Development, Mobile Apps, AI Solutions, UI/UX Design, Cloud Solutions, and Digital Transformation. Always be ready to help and direct people to lance@weforgetechnologies.com for detailed inquiries.",
                },
                {
                  role: "user",
                  content: userMessage,
                },
              ],
              max_tokens: 200,
              temperature: 0.7,
            }),
          },
        );

        if (response.ok) {
          const data = await response.json();
          return data.choices[0].message.content;
        } else {
          console.warn("Groq API error, using fallback responses");
          return getFallbackResponse(userMessage);
        }
      } catch (error) {
        console.warn("Groq API not available, using fallback responses", error);
        return getFallbackResponse(userMessage);
      }
    } else {
      return getFallbackResponse(userMessage);
    }
  }

  // Fallback to local responses
  function getFallbackResponse(msg) {
    const lower = msg.toLowerCase();
    for (const key in botResponses) {
      if (key !== "default" && lower.includes(key)) return botResponses[key];
    }
    return botResponses["default"];
  }

  function addMessage(text, type) {
    if (!chatMessages) return;
    const div = document.createElement("div");
    div.className = `chat-message ${type}`;
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  async function sendMessage() {
    if (!chatInput) return;
    const text = chatInput.value.trim();
    if (!text) return;
    addMessage(text, "user");
    chatInput.value = "";

    // Show typing indicator
    const typingDiv = document.createElement("div");
    typingDiv.className = "chat-message bot";
    typingDiv.textContent = "typing...";
    typingDiv.id = "typing-indicator";
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(async () => {
      // Remove typing indicator
      const typingIndicator = document.getElementById("typing-indicator");
      if (typingIndicator) typingIndicator.remove();

      // Get and add bot response
      const response = await getBotResponse(text);
      addMessage(response, "bot");
    }, 600);
  }

  if (chatSend && chatInput) {
    chatSend.addEventListener("click", () => {
      console.log("Send button clicked");
      sendMessage();
    });
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        console.log("Enter pressed in input");
        sendMessage();
      }
    });
  }

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// Run when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initScript);
} else {
  initScript();
}
