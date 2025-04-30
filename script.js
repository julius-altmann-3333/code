// Hamburger Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

    // Function to scroll to the next section
        function scrollToSection() {
            document.getElementById('section_scrollables').scrollIntoView({
                behavior: 'smooth'
            });
        }

    // Add scroll effect for links
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          targetElement.scrollIntoView({ behavior: 'smooth' });
        });
      });

    // Function to scroll to the corresponding section by ID
        function scrollToTarget(targetName) {
          // Get the target element by ID directly
          const target = document.getElementById(targetName);

          // Debugging: Ensure target is found
          console.log(target);

          // Scroll smoothly to the target, if found
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
            });
          } else {
            console.error(`Element with ID '${targetName}' not found.`);
          }
        }

    // Dropdown United States
    (function() {
      const toggleHeading1 = document.getElementById('toggleHeading1');
      const toggleBox1 = document.getElementById('toggleBox1');
      const section2 = document.getElementById('section2');
      let isDropdown1Open = false;

      if (toggleHeading1) {
        toggleHeading1.addEventListener('click', () => {
          const boxHeight = toggleBox1.scrollHeight;
          if (!isDropdown1Open) {
            toggleBox1.classList.add('open');
            section2.style.marginTop = `${boxHeight}px`;
          } else {
            toggleBox1.classList.remove('open');
            section2.style.marginTop = '0';
          }
          isDropdown1Open = !isDropdown1Open;
        });
      }
    })();

    // Functionality for primary tabs (United States set)
    const mainTabs = document.querySelectorAll('.tabs > .tab:not(.nested-tabs .tab)');
    const mainContents = document.querySelectorAll('.tab-content:not(.nested-tabs .tab-content)');

    mainTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        mainTabs.forEach(t => t.classList.remove('active'));
        mainContents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
      });
    });

    // Functionality for nested tabs (United States set)
    const nestedTabSets = document.querySelectorAll('.nested-tabs');
    nestedTabSets.forEach(set => {
      const tabs = set.querySelectorAll('.tabs > .tab');
      const contents = set.querySelectorAll('.tab-content');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          contents.forEach(c => c.classList.remove('active'));

          tab.classList.add('active');
          set.querySelector(`#${tab.dataset.tab}`).classList.add('active');
        });
      });
    });

    // Dropdown Europe
        (function() {
          const toggleHeading2 = document.getElementById('toggleHeading2');
          const toggleBox2 = document.getElementById('toggleBox2');
          const section3 = document.getElementById('section3');
          let isDropdown2Open = false;

          if (toggleHeading2) {
            toggleHeading2.addEventListener('click', () => {
              const boxHeight = toggleBox2.scrollHeight;
              if (!isDropdown2Open) {
                toggleBox2.classList.add('open');
                section3.style.marginTop = `${boxHeight}px`;
              } else {
                toggleBox2.classList.remove('open');
                section3.style.marginTop = '0';
              }
              isDropdown2Open = !isDropdown2Open;
            });
          }
        })();

    // Functionality for primary tabs (Europe set)
    const mainTabsEurope = document.querySelectorAll('.tabs-europe > .tab-europe:not(.nested-tabs-europe .tab-europe)');
    const mainContentsEurope = document.querySelectorAll('.tab-content-europe:not(.nested-tabs-europe .tab-content-europe)');

    mainTabsEurope.forEach(tab => {
      tab.addEventListener('click', () => {
        mainTabsEurope.forEach(t => t.classList.remove('active'));
        mainContentsEurope.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
      });
    });

    // Functionality for nested tabs (Europe set)
    const nestedTabSetsEurope = document.querySelectorAll('.nested-tabs-europe');
    nestedTabSetsEurope.forEach(set => {
      const tabs = set.querySelectorAll('.tabs-europe > .tab-europe');
      const contents = set.querySelectorAll('.tab-content-europe');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          contents.forEach(c => c.classList.remove('active'));

          tab.classList.add('active');
          set.querySelector(`#${tab.dataset.tab}`).classList.add('active');
        });
      });
    });

    // Dropdown South America
        (function() {
          const toggleHeading3 = document.getElementById('toggleHeading3');
          const toggleBox3 = document.getElementById('toggleBox3');
          const section4 = document.getElementById('section4');
          let isDropdown3Open = false;

          if (toggleHeading3) {
            toggleHeading3.addEventListener('click', () => {
              const boxHeight = toggleBox3.scrollHeight;
              if (!isDropdown3Open) {
                toggleBox3.classList.add('open');
                section4.style.marginTop = `${boxHeight}px`;
              } else {
                toggleBox3.classList.remove('open');
                section4.style.marginTop = '0';
              }
              isDropdown3Open = !isDropdown3Open;
            });
          }
        })();

    // Functionality for primary tabs (South America set)
    const mainTabsSouthAmerica = document.querySelectorAll('.tabs-south-america > .tab-south-america:not(.nested-tabs-south-america .tab-south-america)');
    const mainContentsSouthAmerica = document.querySelectorAll('.tab-content-south-america:not(.nested-tabs-south-america .tab-content-south-america)');

    mainTabsSouthAmerica.forEach(tab => {
      tab.addEventListener('click', () => {
        mainTabsSouthAmerica.forEach(t => t.classList.remove('active'));
        mainContentsSouthAmerica.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
      });
    });

    // Functionality for nested tabs (South America set)
    const nestedTabSetsSouthAmerica = document.querySelectorAll('.nested-tabs-south-america');
    nestedTabSetsSouthAmerica.forEach(set => {
      const tabs = set.querySelectorAll('.tabs-south-america > .tab-south-america');
      const contents = set.querySelectorAll('.tab-content-south-america');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          contents.forEach(c => c.classList.remove('active'));

          tab.classList.add('active');
          set.querySelector(`#${tab.dataset.tab}`).classList.add('active');
        });
      });
    });

    // Dropdown Central America
        (function() {
          const toggleHeading4 = document.getElementById('toggleHeading4');
          const toggleBox4 = document.getElementById('toggleBox4');
          const section5 = document.getElementById('section5');
          let isDropdown4Open = false;

          if (toggleHeading4) {
            toggleHeading4.addEventListener('click', () => {
              const boxHeight = toggleBox4.scrollHeight;
              if (!isDropdown4Open) {
                toggleBox4.classList.add('open');
                section5.style.marginTop = `${boxHeight}px`;
              } else {
                toggleBox4.classList.remove('open');
                section5.style.marginTop = '0';
              }
              isDropdown4Open = !isDropdown4Open;
            });
          }
        })();

    // Functionality for primary tabs (Central America set)
    const mainTabsCentralAmerica = document.querySelectorAll('.tabs-central-america > .tab-central-america:not(.nested-tabs-central-america .tab-central-america)');
    const mainContentsCentralAmerica = document.querySelectorAll('.tab-content-central-america:not(.nested-tabs-central-america .tab-content-central-america)');

    mainTabsCentralAmerica.forEach(tab => {
      tab.addEventListener('click', () => {
        mainTabsCentralAmerica.forEach(t => t.classList.remove('active'));
        mainContentsCentralAmerica.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
      });
    });

    // Functionality for nested tabs (Central America set)
    const nestedTabSetsCentralAmerica = document.querySelectorAll('.nested-tabs-central-america');
    nestedTabSetsCentralAmerica.forEach(set => {
      const tabs = set.querySelectorAll('.tabs-central-america > .tab-central-america');
      const contents = set.querySelectorAll('.tab-content-central-america');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          contents.forEach(c => c.classList.remove('active'));

          tab.classList.add('active');
          set.querySelector(`#${tab.dataset.tab}`).classList.add('active');
        });
      });
    });

    // Dropdown New Zealand
        (function() {
          const toggleHeading5 = document.getElementById('toggleHeading5');
          const toggleBox5 = document.getElementById('toggleBox5');
          const section6 = document.getElementById('section6');
          let isDropdown5Open = false;

          if (toggleHeading5) {
            toggleHeading5.addEventListener('click', () => {
              const boxHeight = toggleBox5.scrollHeight;
              if (!isDropdown5Open) {
                toggleBox5.classList.add('open');
                section6.style.marginTop = `${boxHeight}px`;
              } else {
                toggleBox5.classList.remove('open');
                section6.style.marginTop = '0';
              }
              isDropdown5Open = !isDropdown5Open;
            });
          }
        })();

    // Functionality for primary tabs (New Zealand set)
    const mainTabsNewZealand = document.querySelectorAll('.tabs-new-zealand > .tab-new-zealand:not(.nested-tabs-new-zealand .tab-new-zealand)');
    const mainContentsNewZealand = document.querySelectorAll('.tab-content-new-zealand:not(.nested-tabs-new-zealand .tab-content-new-zealand)');

    mainTabsNewZealand.forEach(tab => {
      tab.addEventListener('click', () => {
        mainTabsNewZealand.forEach(t => t.classList.remove('active'));
        mainContentsNewZealand.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
      });
    });

    // Functionality for nested tabs (New Zealand set)
    const nestedTabSetsNewZealand = document.querySelectorAll('.nested-tabs-new-zealand');
    nestedTabSetsNewZealand.forEach(set => {
      const tabs = set.querySelectorAll('.tabs-new-zealand > .tab-new-zealand');
      const contents = set.querySelectorAll('.tab-content-new-zealand');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          contents.forEach(c => c.classList.remove('active'));

          tab.classList.add('active');
          set.querySelector(`#${tab.dataset.tab}`).classList.add('active');
        });
      });
    });

    // Dropdown Australia
        (function() {
          const toggleHeading6 = document.getElementById('toggleHeading6');
          const toggleBox6 = document.getElementById('toggleBox6');
          const section7 = document.getElementById('section7');
          let isDropdown6Open = false;

          if (toggleHeading6) {
            toggleHeading6.addEventListener('click', () => {
              const boxHeight = toggleBox6.scrollHeight;
              if (!isDropdown6Open) {
                toggleBox6.classList.add('open');
                section7.style.marginTop = `${boxHeight}px`;
              } else {
                toggleBox6.classList.remove('open');
                section7.style.marginTop = '0';
              }
              isDropdown6Open = !isDropdown6Open;
            });
          }
        })();

    // Functionality for primary tabs (Australia set)
    const mainTabsAustralia = document.querySelectorAll('.tabs-australia > .tab-australia:not(.nested-tabs-australia .tab-australia)');
    const mainContentsAustralia = document.querySelectorAll('.tab-content-australia:not(.nested-tabs-australia .tab-content-australia)');

    mainTabsAustralia.forEach(tab => {
      tab.addEventListener('click', () => {
        mainTabsAustralia.forEach(t => t.classList.remove('active'));
        mainContentsAustralia.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
      });
    });

    // Functionality for nested tabs (Australia set)
    const nestedTabSetsAustralia = document.querySelectorAll('.nested-tabs-australia');
    nestedTabSetsAustralia.forEach(set => {
      const tabs = set.querySelectorAll('.tabs-australia > .tab-australia');
      const contents = set.querySelectorAll('.tab-content-australia');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          contents.forEach(c => c.classList.remove('active'));

          tab.classList.add('active');
          set.querySelector(`#${tab.dataset.tab}`).classList.add('active');
        });
      });
    });