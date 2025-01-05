 // JavaScript for Randomizing Snowflake Movement
        document.querySelectorAll('._snowflake_1rt7c_12').forEach(snowflake => {
            // Set random drift values for each snowflake
            const drift = Math.random() * 2 - 1;  // Random horizontal movement (-1 to 1)
            snowflake.style.setProperty('--drift', `${drift * 100}px`);

            // Set random animation duration between 15s and 25s
            const animationDuration = Math.random() * 10 + 15;
            snowflake.style.animationDuration = `${animationDuration}s`;

            // Set random animation delay between 0s and 10s
            const animationDelay = Math.random()*10 ;
            snowflake.style.animationDelay = `${animationDelay}s`;
        });