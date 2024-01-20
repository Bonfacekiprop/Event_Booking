import React from "react";

const Event = () => {
  return (
    <div>
      <StyledTitle size={65}>Book Your Space Now</StyledTitle>
      <form>
            <label>
                <input type="radio" name="ticketType" value="regular"/>
                Regular
            </label>

            <label>
                <input type="radio" name="ticketType" value="vip"/>
                VIP
            </label>

            <label>
                <input type="radio" name="ticketType" value="vvip"/>
                VVIP
            </label>

            <button type="button" onclick="bookNow()">Book Now</button>
        </form>
    </div>
  );
};
export default Event;
