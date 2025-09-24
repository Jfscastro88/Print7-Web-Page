import { useEffect, useMemo } from "react";
import { Menu, Text, ActionIcon } from "@mantine/core";
import i18n from "../../i18n";
import ReactCountryFlag from "react-country-flag";

const Langs = [
  { value: "pt", label: "Português", countryCode: "PT" },
  { value: "en", label: "English", countryCode: "GB" },
  { value: "it", label: "Italiano", countryCode: "IT" },
];

export default function LanguageSwitcher({ inMobile = false }) {
  const current = i18n.language || "pt";

  useEffect(() => {
    document.documentElement.setAttribute("lang", i18n.language || "pt");
  }, [current]);

  const currentLang = useMemo(
    () => Langs.find((l) => l.value === (current?.slice(0, 2) || "pt")) || Langs[0],
    [current]
  );

  const changeLang = (value) => {
    i18n.changeLanguage(value);
    localStorage.setItem("lang", value);
  };

  const menuProps = inMobile
    ? { withinPortal: false, position: "bottom", zIndex: 1100 }
    : { withinPortal: true, position: "bottom-end", zIndex: 3000 };

  return (
    <Menu width={140} withArrow={!inMobile} {...menuProps}>
      <Menu.Target>
        <ActionIcon variant="subtle" radius="xl" aria-label="Selecionar idioma">
          <ReactCountryFlag
            countryCode={currentLang.countryCode}
            svg
            style={{ width: "1.4em", height: "1.4em" }}
          />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        {Langs.map((opt) => (
          <Menu.Item key={opt.value} onClick={() => changeLang(opt.value)}>
            <div className="items-center justify-center w-full text-center">
              <ReactCountryFlag
                countryCode={opt.countryCode}
                svg
                style={{ width: "1.5em", height: "1.5em" }}
              />
              <Text size="xs">{opt.label}</Text>
            </div>
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
