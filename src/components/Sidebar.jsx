import { Link, useLocation } from "react-router-dom";
import {
  FileText,
  BookOpen,
  Scale,
  AlertTriangle,
  BarChart3,
  Database,
  CheckCircle,
  Sparkles,
} from "lucide-react";

const items = [
  {
    title: "Resumen",
    path: "/resumen",
    icon: <BookOpen size={18} />,
  },
  {
    title: "Marco",
    path: "/marco",
    icon: <FileText size={18} />,
  },
  {
    title: "Delitos",
    path: "/delitos",
    icon: <AlertTriangle size={18} />,
  },
  {
    title: "Comparación",
    path: "/comparacion",
    icon: <Scale size={18} />,
  },
  {
    title: "Responsabilidad",
    path: "/responsabilidad",
    icon: <BarChart3 size={18} />,
  },
  {
    title: "Datos",
    path: "/datos",
    icon: <Database size={18} />,
  },
  {
    title: "Conclusiones",
    path: "/conclusiones",
    icon: <CheckCircle size={18} />,
  },
  {
    title: "Prompts",
    path: "/prompts",
    icon: <Sparkles size={18} />,
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="logo">
        Informe URRMAT
      </div>

      <div className="menu">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={
              location.pathname === item.path
                ? "menu-item active"
                : "menu-item"
            }
          >
            {item.icon}

            <span>{item.title}</span>

            <div className="circle"></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
