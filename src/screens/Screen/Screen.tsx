import { PlusIcon } from "lucide-react";
import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { useLanguage } from "../../contexts/LanguageContext";

// Navigation menu items data

export const Screen = (): JSX.Element => {
  const { language, setLanguage, t, getTranslationObject } = useLanguage();

  // Helper function to get dropdown items
  const getDropdownItems = (menuType: string) => {
    const itemsKey = `${menuType}Items` as keyof typeof translations['ru'];
    const items = getTranslationObject(itemsKey);
    return Object.entries(items || {});
  };

  const navMenuItems = [
    { icon: "/krak.png", text: t('promotions'), key: 'promotions' },
    { icon: "/kaycak.png", text: t('hotOffers'), key: 'hotOffers' },
    { icon: "/sund.png", text: t('giftSets'), key: 'giftSets' },
    { icon: "/quest.png", text: t('events'), key: 'events' },
    { icon: "/orc.png", text: t('ourBrands'), key: 'ourBrands' },
  ];

  return (
    <div className="bg-white w-full min-h-screen">
      <div className="bg-white w-full max-w-[1440px] mx-auto relative">
        {/* Top info bar */}
        <div className="w-full h-[34px] bg-[#f3f3f3] hidden md:block">
          <div className="flex justify-between items-center h-full px-4 md:px-10 max-w-[1440px] mx-auto">
            {/* Left section - Location and phone */}
            <div className="flex items-center gap-2 md:gap-6">
              <div className="flex items-center">
                <div className="w-4 h-4 opacity-50 mr-1">
                  <img
                    className="w-[11px] h-3.5 mt-px ml-[3px]"
                    alt="Location"
                    src="/Frame.png"
                  />
                </div>
                <span className="text-xs md:text-sm text-[#343a3f] [font-family:'Maza-Regular',Helvetica]">
                  {t('location')}
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-4 h-4 mr-2">
                  <img
                    className="w-2 h-[13px] mt-px ml-1"
                    alt="Phone"
                    src="/Group.png"
                  />
                </div>
                <span className="text-xs md:text-sm text-[#343a3f] [font-family:'Maza-Regular',Helvetica]">
                  {t('phone')}
                </span>
              </div>
            </div>

            {/* Center - Working hours */}
            <div className="flex items-center gap-2">
              <span className="text-xs md:text-sm text-[#343a3f] [font-family:'Maza-Regular',Helvetica]">
                {t('daily')}
              </span>
              <span className="text-xs md:text-sm text-[#343a3f] [font-family:'Maza-Regular',Helvetica]">
                {t('hours')}
              </span>
            </div>

            {/* Right section - Links */}
            <div className="flex items-center gap-4 opacity-80">
              <span className="text-xs md:text-sm text-[#343a3f] [font-family:'Maza-Regular',Helvetica]">
                {t('delivery')}
              </span>
              <span className="text-xs md:text-sm text-[#343a3f] [font-family:'Maza-Regular',Helvetica]">
                {t('payment')}
              </span>
              <span className="text-xs md:text-sm text-[#343a3f] [font-family:'Maza-Regular',Helvetica]">
                {t('contacts')}
              </span>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="w-full mt-0 md:mt-[34px]">
          <div className="flex items-center px-4 md:px-10 py-2 md:py-4 max-w-[1440px] mx-auto">
            {/* Logo */}
            <div className="w-12 h-12 md:w-20 md:h-20 bg-[#4888ff] rounded-[24px] md:rounded-[40px] mr-2 md:mr-5 flex-shrink-0">
              <div className="relative w-[42px] h-[42px] md:w-[70px] md:h-[70px] top-[3px] left-[3px] md:top-[5px] md:left-[5px] bg-[#4888ff] rounded-[21px] md:rounded-[35px]">
             <div className="flex justify-center items-center pt-[10px]">
              <img src="Vector.png" alt="Vec" className="w-[50px] h-[50px]" />
                </div>
                <div className="relative w-[24px] h-[24px] md:w-[41px] md:h-[41px] top-[9px] left-[9px] md:top-[15px] md:left-[15px] bg-[url(/reshot-icon-game-pacman-uzh68ypbt3-1.svg)] bg-[100%_100%]" />
              </div>
            </div>

            {/* Menu button */}
            <Button className="w-12 h-8 md:w-[101px] md:h-12 bg-[#4888ff] rounded-lg mr-2 md:mr-4 flex-shrink-0">
             <Button className="w-12 h-8 md:w-[101px] md:h-12 bg-[#4888ff] rounded-lg mr-2 md:mr-4 flex-shrink-0">
              <div className="w-[41px] h-4">
                <img
                src="/Frame6.png"
                alt="gic"
                />
              </div>
            </Button>
            </Button>

            {/* Search bar */}
            <div className="relative flex-1 max-w-[654px] mr-2 md:mr-6">
              <Input
                className="h-8 md:h-12 pl-3 md:pl-6 border border-solid border-[#4888ff33] rounded-lg text-sm md:text-base"
                placeholder={t('searchPlaceholder')}
              />
              <Button className="absolute right-1 top-1 h-6 md:h-10 w-12 md:w-[78px] bg-[#4888ff] rounded text-xs md:text-sm">
                {t('findButton')}
              </Button>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-1 md:gap-2">
              <Button
                variant="ghost"
                className="w-8 h-8 md:w-12 md:h-12 bg-[#f3f3f3] rounded p-0 hidden md:flex"
              >
                <div className="w-4 h-4 md:w-6 md:h-6">
                  <img
                    className="w-4 h-[14px] md:w-6 md:h-[21px]"
                    alt="User account"
                    src="/teleg.png"
                  />
                </div>
              </Button>

              <Button
                variant="ghost"
                className="w-8 h-8 md:w-12 md:h-12 bg-[#f3f3f3] rounded p-0 hidden md:flex"
              >
                <div className="w-4 h-4 md:w-6 md:h-6">
                  <img
                    className="w-[15px] h-[15px] md:w-[22px] md:h-[22px]"
                    alt="Search"
                    src="/watsap.png"
                  />
                </div>
              </Button>

              {/* Language selector */}
              <div className="w-[60px] md:w-[78px] h-6 flex items-center ml-1 md:ml-3">
                <div className="w-4 h-4 md:w-6 md:h-6 mr-1 md:mr-2 hidden md:block">
                  <img
                    className="w-[35px] h-[10px] md:w-[21px] md:h-[21px] mt-0.5 ml-0.5"
                    alt="Language"
                    src="/language.png"
                  />
                </div>
                <button 
                  onClick={() => setLanguage('ru')}
                  className={`text-sm md:text-base [font-family:'Maza-Regular',Helvetica] ${language === 'ru' ? 'text-[#343a3f]' : 'text-[#343a3f] opacity-40'}`}
                >
                  RU
                </button>
                <Separator
                  orientation="vertical"
                  className="h-3 mx-1 bg-[#343a3f]"
                />
                <button 
                  onClick={() => setLanguage('en')}
                  className={`text-sm md:text-base [font-family:'Maza-Regular',Helvetica] ${language === 'en' ? 'text-[#343a3f]' : 'text-[#343a3f] opacity-40'}`}
                >
                  EN
                </button>
              </div>

              {/* Cart and user buttons */}
              <Button
                variant="outline"
                className="w-8 h-8 md:w-12 md:h-12 rounded border border-solid border-[#d2d2d2] p-0 ml-2 md:ml-6"
              >
                <div className="w-4 h-4 md:w-6 md:h-6">
                  <img
                    className="w-[15px] h-[13px] md:w-[22px] md:h-[19px] mt-[2px] md:mt-[3px] ml-px"
                    alt="Cart"
                    src="/like.png"
                  />
                </div>
              </Button>

              <Button
                variant="outline"
                className="w-8 h-8 md:w-12 md:h-12 rounded border border-solid border-[#d2d2d2] p-0 hidden md:flex"
              >
                <img
                  className="w-4 h-4 md:w-6 md:h-6"
                  alt="User"
                  src="/hunter.png"
                />
              </Button>

              <Button
                variant="outline"
                className="w-8 h-8 md:w-12 md:h-12 rounded border border-solid border-[#d2d2d2] p-0 hidden md:flex"
              >
                <img
                  className="w-4 h-4 md:w-6 md:h-6"
                  alt="User"
                  src="/beg.png"
                />
              </Button>
            </div>
          </div>

          {/* Navigation menu */}
          <div className="flex flex-col md:flex-row justify-between px-4 md:px-10 mt-2 max-w-[1440px] mx-auto">
            <div className="flex flex-wrap gap-2 md:gap-4 mb-2 md:mb-0">
              {navMenuItems.map((item, index) => (
                <DropdownMenu
                  key={index}
                >
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="h-8 md:h-[42px] bg-[#f3f3f3] rounded-lg px-2 md:px-4 py-2 md:py-[11px] flex items-center flex-shrink-0 hover:bg-[#e8e8e8] transition-colors"
                    >
                      <img
                        className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2"
                        alt={item.text}
                        src={item.icon}
                      />
                      <span className="text-xs md:text-base text-[#343a3f] [font-family:'Maza-Regular',Helvetica] whitespace-nowrap mr-1">
                        {item.text}
                      </span>
                      <ChevronDownIcon className="w-3 h-3 md:w-4 md:h-4 text-[#343a3f] opacity-60" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="w-56 bg-white border border-[#e0e0e0] shadow-lg rounded-lg"
                    align="start"
                  >
                    {getDropdownItems(item.key).map(([key, value]) => (
                      <DropdownMenuItem 
                        key={key}
                        className="px-3 py-2 text-sm text-[#343a3f] [font-family:'Maza-Regular',Helvetica] hover:bg-[#f3f3f3] cursor-pointer transition-colors"
                      >
                        {value}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </div>

            {/* Build PC button */}
            <Button
              variant="ghost"
              className="h-8 md:h-[42px] w-full md:w-44 bg-[#f3f3f3] rounded-lg flex items-center justify-center"
            >
              <PlusIcon className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              <span className="text-xs md:text-base text-[#4888ff] [font-family:'Maza-Regular',Helvetica]">
                {t('buildPC')}
              </span>
            </Button>
          </div>
        </div>

        {/* Hero banner section */}
        <div className="w-full h-[300px] md:h-[439px] mt-4 md:mt-0 overflow-hidden bg-[linear-gradient(135deg,rgba(103,40,112,1)_20%,rgba(79,224,255,1)_100%)] relative">
          {/* Left content */}
          <div className="absolute w-full md:w-[860px] h-[300px] md:h-[425px] top-0 md:top-[-252px] left-0 md:left-[-31px]">
            <img
              className="absolute w-[200px] md:w-[295px] h-[250px] md:h-[369px] top-0 left-0 hidden md:block"
              alt="Frame"
              src="/frame-1-5.svg"
            />
            <img
              className="w-full md:w-[473px] h-[300px] md:h-[425px] top-0 left-0 absolute object-cover opacity-30 md:opacity-100"
              alt="Image"
              src="/image-322.png"
            />
            <h1 className="absolute w-[280px] md:w-[729px] top-[200px] md:top-[335px] left-4 md:left-[131px] [font-family:'Tenor_Sans',Helvetica] font-normal text-white text-lg md:text-[32px] tracking-[0] leading-5 md:leading-9 z-10">
              {t('heroTitle')}
            </h1>
          </div>

          {/* Decorative element */}
          <div className="absolute w-[101px] h-[69px] -top-4 left-[2014px] rotate-[-38.85deg] hidden md:block">
            <div className="absolute w-[98px] h-9 top-7 left-0.5 rounded-[48.91px/18.22px] rotate-[5.56deg] [background:radial-gradient(50%_50%_at_50%_58%,rgba(84,96,121,0.4)_0%,rgba(179,187,203,0)_100%)]" />
            <img
              className="w-[47px] h-[47px] top-[-1482px] left-[-1432px] rotate-[38.85deg] absolute object-cover"
              alt="Image"
              src="/image-37.png"
            />
          </div>

          {/* Description text */}
          <p className="absolute w-[280px] md:w-[639px] top-[120px] md:top-[181px] left-4 md:left-[101px] [font-family:'Tenor_Sans',Helvetica] text-white text-sm md:text-lg leading-4 md:leading-6 font-normal tracking-[0] z-10">
            {t('heroDescription')}
          </p>

          {/* CTA Button */}
          <Button className="absolute top-[250px] md:top-[304px] left-4 md:left-[100px] bg-white text-[#672870] px-6 md:px-10 py-2 md:py-4 rounded-lg z-10">
            <span className="[font-family:'Maza-Regular',Helvetica] text-sm md:text-base leading-4 md:leading-5">
              {t('catalogButton')}
            </span>
          </Button>

          {/* Hero image */}
          <img
            className="absolute w-[200px] md:w-[566px] h-[300px] md:h-[439px] top-0 right-0 md:left-[874px] object-cover"
            alt="Gamepad"
            src="/gamepad.png"
          />
        </div>
      </div>
    </div>
  );
};
