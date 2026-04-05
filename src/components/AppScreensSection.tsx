import { useState } from "react";
import {
  Home, MapPin, Search, ShoppingCart, CreditCard, Package,
  ChevronRight, Star, Gift, Clock, Truck, CheckCircle2,
  Percent, Heart, User, Bell, Menu, ArrowLeft, Plus, Minus,
  Smartphone, FileText, Phone, Eye
} from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import { FloatingPaths } from "./ui/background-paths";
import avistaoLogo from "@/assets/avistao-logo.jpg";
import avistaoCardImg from "@/assets/avistao-card.png";

/* ─── Phone Frame ─── */
const PhoneFrame = ({ children, label }: { children: React.ReactNode; label: string }) => (
  <div className="w-[260px] md:w-[280px] shrink-0">
    <p className="text-center text-[10px] text-dark-foreground/40 font-display font-bold mb-3 tracking-[0.2em] uppercase">{label}</p>
    <div className="bg-[#1a1a1a] rounded-[2.5rem] p-[10px] shadow-2xl shadow-black/40 ring-1 ring-white/10">
      {/* Notch */}
      <div className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#1a1a1a] rounded-b-2xl z-20" />
      </div>
      <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5] flex flex-col">
        {children}
      </div>
    </div>
  </div>
);

/* ─── Status Bar ─── */
const StatusBar = () => (
  <div className="flex items-center justify-between px-5 pt-6 pb-1 text-[8px] font-semibold text-gray-900">
    <span>9:41</span>
    <div className="flex gap-1 items-center">
      <div className="w-3 h-2 border border-gray-900 rounded-[1px] relative">
        <div className="absolute inset-[1px] right-[2px] bg-gray-900 rounded-[0.5px]" />
      </div>
    </div>
  </div>
);

/* ─── Nav Bar ─── */
const BottomNav = ({ active = 0 }: { active?: number }) => {
  const items = [
    { icon: Home, label: "Início" },
    { icon: Search, label: "Buscar" },
    { icon: ShoppingCart, label: "Carrinho" },
    { icon: User, label: "Perfil" },
  ];
  return (
    <div className="flex items-center justify-around py-2 border-t border-gray-100 bg-white mt-auto">
      {items.map((item, i) => (
        <div key={item.label} className="flex flex-col items-center gap-0.5">
          <item.icon size={14} className={i === active ? "text-red-600" : "text-gray-400"} />
          <span className={`text-[7px] font-medium ${i === active ? "text-red-600" : "text-gray-400"}`}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

/* ═══════════════════════════════════════════════
   SCREENS
   ═══════════════════════════════════════════════ */

const ScreenHome = () => (
  <PhoneFrame label="Tela Inicial">
    <StatusBar />
    <div className="flex-1 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-700 to-red-600 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={avistaoLogo} alt="" className="w-7 h-7 rounded-full object-cover ring-2 ring-white/30" />
          <div>
            <p className="text-[9px] text-white/70">Bem-vindo ao</p>
            <p className="text-[11px] font-bold text-white">Avistão</p>
          </div>
        </div>
        <Bell size={14} className="text-white/80" />
      </div>

      {/* Search */}
      <div className="px-3 -mt-3 relative z-10">
        <div className="bg-white rounded-xl shadow-md flex items-center gap-2 px-3 py-2">
          <Search size={12} className="text-gray-400" />
          <span className="text-[9px] text-gray-400">Buscar produtos...</span>
        </div>
      </div>

      {/* Banner */}
      <div className="px-3 mt-2.5">
        <div className="bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl p-3 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-4 translate-x-4" />
          <p className="text-[8px] font-bold text-amber-900">🔥 OFERTA DA SEMANA</p>
          <p className="text-[11px] font-black text-amber-900 mt-0.5">Até 30% OFF</p>
          <p className="text-[7px] text-amber-800 mt-0.5">Em produtos selecionados</p>
        </div>
      </div>

      {/* Quick access */}
      <div className="px-3 mt-3">
        <p className="text-[8px] font-bold text-gray-500 uppercase tracking-wider mb-2">Acesso rápido</p>
        <div className="grid grid-cols-4 gap-2">
          {[
            { icon: Truck, label: "Delivery", color: "bg-red-50 text-red-600" },
            { icon: CreditCard, label: "Avistão Card", color: "bg-amber-50 text-amber-600" },
            { icon: Percent, label: "Ofertas", color: "bg-green-50 text-green-600" },
            { icon: Package, label: "Pedidos", color: "bg-blue-50 text-blue-600" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1">
              <div className={`w-9 h-9 rounded-xl ${item.color} flex items-center justify-center`}>
                <item.icon size={14} />
              </div>
              <span className="text-[7px] font-medium text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="px-3 mt-3">
        <p className="text-[8px] font-bold text-gray-500 uppercase tracking-wider mb-2">Categorias</p>
        <div className="flex gap-2 overflow-hidden">
          {["🥩 Carnes", "🥛 Laticínios", "🍞 Padaria", "🧹 Limpeza"].map((cat) => (
            <div key={cat} className="bg-gray-50 rounded-lg px-2.5 py-1.5 shrink-0">
              <span className="text-[8px] font-medium text-gray-700">{cat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <BottomNav active={0} />
  </PhoneFrame>
);

const ScreenBranches = () => (
  <PhoneFrame label="Escolha de Filial">
    <StatusBar />
    <div className="flex-1 overflow-hidden">
      <div className="px-4 pt-2 pb-3">
        <p className="text-[13px] font-black text-gray-900">Escolha sua unidade</p>
        <p className="text-[8px] text-gray-400 mt-0.5">Selecione a filial mais próxima de você</p>
      </div>
      <div className="px-3 space-y-2">
        {[
          { name: "Avistão Atacarejo", sub: "Rua Principal, Centro", featured: true },
          { name: "Avistão Sertânia", sub: "Av. Central, 120" },
          { name: "Avistão Carnaíba", sub: "Rua do Comércio, 45" },
          { name: "Avistão Iguaraci", sub: "Av. Brasil, 200" },
          { name: "Avistão Express", sub: "Rua Nova, 88" },
        ].map((b) => (
          <div key={b.name} className={`flex items-center gap-3 p-3 rounded-xl border ${b.featured ? "border-red-200 bg-red-50/50" : "border-gray-100 bg-white"}`}>
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${b.featured ? "bg-red-100" : "bg-gray-100"}`}>
              <MapPin size={14} className={b.featured ? "text-red-600" : "text-gray-500"} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold text-gray-900 truncate">{b.name}</p>
              <p className="text-[8px] text-gray-400">{b.sub}</p>
            </div>
            <ChevronRight size={12} className="text-gray-300" />
          </div>
        ))}
      </div>
    </div>
    <BottomNav />
  </PhoneFrame>
);

const ScreenCatalog = () => (
  <PhoneFrame label="Catálogo">
    <StatusBar />
    <div className="flex-1 overflow-hidden">
      <div className="bg-gradient-to-r from-red-700 to-red-600 px-4 py-2.5">
        <div className="bg-white/20 rounded-lg flex items-center gap-2 px-3 py-1.5">
          <Search size={11} className="text-white/70" />
          <span className="text-[8px] text-white/70">Buscar em Bebidas...</span>
        </div>
      </div>
      <div className="flex gap-1.5 px-3 py-2 overflow-hidden">
        {["Todos", "Bebidas", "Mercearia", "Frios"].map((c, i) => (
          <div key={c} className={`px-2.5 py-1 rounded-full text-[7px] font-bold shrink-0 ${i === 1 ? "bg-red-600 text-white" : "bg-gray-100 text-gray-500"}`}>{c}</div>
        ))}
      </div>
      <div className="px-3 grid grid-cols-2 gap-2">
        {[
          { name: "Coca-Cola 2L", price: "R$ 9,99", old: "R$ 12,49" },
          { name: "Água Min. 500ml", price: "R$ 2,49" },
          { name: "Suco Natural 1L", price: "R$ 7,99", old: "R$ 9,99" },
          { name: "Cerveja Pack 12", price: "R$ 39,90" },
        ].map((p) => (
          <div key={p.name} className="bg-white border border-gray-100 rounded-xl p-2 space-y-1.5">
            <div className="bg-gray-50 rounded-lg aspect-square flex items-center justify-center">
              <Package size={20} className="text-gray-300" />
            </div>
            <p className="text-[8px] font-semibold text-gray-800 leading-tight">{p.name}</p>
            <div className="flex items-center gap-1">
              {p.old && <span className="text-[7px] text-gray-400 line-through">{p.old}</span>}
              <span className="text-[9px] font-black text-red-600">{p.price}</span>
            </div>
            <button className="w-full bg-red-600 text-white text-[7px] font-bold rounded-lg py-1">Adicionar</button>
          </div>
        ))}
      </div>
    </div>
    <BottomNav active={1} />
  </PhoneFrame>
);

const ScreenProduct = () => (
  <PhoneFrame label="Detalhe do Produto">
    <StatusBar />
    <div className="flex-1 overflow-hidden">
      <div className="px-3 pt-1">
        <div className="flex items-center gap-2 mb-2">
          <ArrowLeft size={14} className="text-gray-600" />
          <span className="text-[9px] text-gray-400">Voltar</span>
        </div>
      </div>
      <div className="bg-gray-50 mx-3 rounded-2xl aspect-[4/3] flex items-center justify-center">
        <Package size={40} className="text-gray-300" />
      </div>
      <div className="px-4 mt-3 space-y-2">
        <div>
          <p className="text-[12px] font-black text-gray-900">Coca-Cola Original 2L</p>
          <p className="text-[8px] text-gray-400">Refrigerante • 2 Litros</p>
        </div>
        <div className="flex items-end gap-2">
          <span className="text-[7px] text-gray-400 line-through">R$ 12,49</span>
          <span className="text-[16px] font-black text-red-600">R$ 9,99</span>
        </div>
        <div className="flex items-center gap-3 py-2">
          <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-2 py-1">
            <Minus size={12} className="text-gray-500" />
            <span className="text-[10px] font-bold w-4 text-center">1</span>
            <Plus size={12} className="text-red-600" />
          </div>
          <span className="text-[8px] text-gray-400">Unidade</span>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 space-y-1">
          <p className="text-[8px] font-bold text-gray-600">Informações</p>
          <p className="text-[7px] text-gray-400 leading-relaxed">Refrigerante sabor original. Embalagem PET 2 litros. Validade: 6 meses.</p>
        </div>
      </div>
      <div className="mt-auto px-3 pb-3">
        <button className="w-full bg-red-600 text-white text-[9px] font-bold rounded-xl py-2.5 flex items-center justify-center gap-1.5">
          <ShoppingCart size={12} /> Adicionar ao carrinho
        </button>
      </div>
    </div>
  </PhoneFrame>
);

const ScreenCart = () => (
  <PhoneFrame label="Carrinho">
    <StatusBar />
    <div className="flex-1 overflow-hidden">
      <div className="px-4 pt-2 pb-3 flex items-center gap-2">
        <ShoppingCart size={14} className="text-red-600" />
        <p className="text-[12px] font-black text-gray-900">Meu Carrinho</p>
        <span className="bg-red-100 text-red-600 text-[7px] font-bold px-1.5 py-0.5 rounded-full ml-1">3 itens</span>
      </div>
      <div className="px-3 space-y-2">
        {[
          { name: "Coca-Cola 2L", qty: 1, price: "R$ 9,99" },
          { name: "Arroz Tipo 1 5kg", qty: 1, price: "R$ 24,90" },
          { name: "Leite Integral 1L", qty: 2, price: "R$ 11,98" },
        ].map((item) => (
          <div key={item.name} className="flex items-center gap-2.5 p-2.5 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-100">
              <Package size={14} className="text-gray-300" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] font-bold text-gray-800 truncate">{item.name}</p>
              <p className="text-[7px] text-gray-400">Qtd: {item.qty}</p>
            </div>
            <span className="text-[9px] font-bold text-gray-900">{item.price}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto px-3 pb-3">
        <div className="bg-gray-50 rounded-xl p-3 space-y-1.5 mb-2">
          <div className="flex justify-between text-[8px]"><span className="text-gray-400">Subtotal</span><span className="text-gray-700 font-semibold">R$ 46,87</span></div>
          <div className="flex justify-between text-[8px]"><span className="text-gray-400">Taxa de entrega</span><span className="text-green-600 font-semibold">R$ 5,99</span></div>
          <div className="border-t border-gray-200 my-1" />
          <div className="flex justify-between text-[10px]"><span className="font-bold text-gray-900">Total</span><span className="font-black text-red-600">R$ 52,86</span></div>
        </div>
        <button className="w-full bg-red-600 text-white text-[9px] font-bold rounded-xl py-2.5">Continuar</button>
      </div>
    </div>
  </PhoneFrame>
);

const ScreenCheckout = () => (
  <PhoneFrame label="Finalização">
    <StatusBar />
    <div className="flex-1 overflow-hidden">
      <div className="px-4 pt-2 pb-2">
        <p className="text-[12px] font-black text-gray-900">Finalizar Pedido</p>
      </div>
      <div className="px-3 space-y-2.5">
        <div className="bg-gray-50 rounded-xl p-3 space-y-1.5">
          <p className="text-[8px] font-bold text-gray-500 uppercase tracking-wider">Endereço de entrega</p>
          <div className="flex items-center gap-2">
            <MapPin size={12} className="text-red-500" />
            <div>
              <p className="text-[9px] font-semibold text-gray-800">Rua das Flores, 123</p>
              <p className="text-[7px] text-gray-400">Centro, Sertânia - PE</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 space-y-2">
          <p className="text-[8px] font-bold text-gray-500 uppercase tracking-wider">Tipo de entrega</p>
          <div className="flex gap-2">
            <div className="flex-1 border-2 border-red-500 bg-red-50/50 rounded-xl p-2 text-center">
              <Truck size={14} className="text-red-600 mx-auto" />
              <p className="text-[7px] font-bold text-red-600 mt-1">Delivery</p>
            </div>
            <div className="flex-1 border border-gray-200 rounded-xl p-2 text-center">
              <Package size={14} className="text-gray-400 mx-auto" />
              <p className="text-[7px] font-medium text-gray-400 mt-1">Retirada</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 space-y-2">
          <p className="text-[8px] font-bold text-gray-500 uppercase tracking-wider">Pagamento</p>
          <div className="space-y-1.5">
            {[
              { label: "PIX", desc: "Aprovação imediata", active: true },
              { label: "Cartão", desc: "Crédito ou débito" },
              { label: "Avistão Card", desc: "Cartão da rede" },
            ].map((m) => (
              <div key={m.label} className={`flex items-center gap-2 p-2 rounded-lg ${m.active ? "border-2 border-red-500 bg-red-50/30" : "border border-gray-200"}`}>
                <CreditCard size={12} className={m.active ? "text-red-500" : "text-gray-400"} />
                <div>
                  <p className={`text-[8px] font-bold ${m.active ? "text-red-600" : "text-gray-700"}`}>{m.label}</p>
                  <p className="text-[6px] text-gray-400">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-auto px-3 pb-3">
        <button className="w-full bg-red-600 text-white text-[9px] font-bold rounded-xl py-2.5">Finalizar Pedido — R$ 52,86</button>
      </div>
    </div>
  </PhoneFrame>
);

const ScreenOrders = () => (
  <PhoneFrame label="Meus Pedidos">
    <StatusBar />
    <div className="flex-1 overflow-hidden">
      <div className="px-4 pt-2 pb-3">
        <p className="text-[12px] font-black text-gray-900">Meus Pedidos</p>
      </div>
      <div className="px-3 space-y-2.5">
        {[
          { id: "#1247", status: "Saiu para entrega", color: "bg-amber-100 text-amber-700", icon: Truck, date: "Hoje, 14:30" },
          { id: "#1245", status: "Entregue", color: "bg-green-100 text-green-700", icon: CheckCircle2, date: "Ontem, 10:15" },
          { id: "#1240", status: "Entregue", color: "bg-green-100 text-green-700", icon: CheckCircle2, date: "12/03, 18:00" },
        ].map((o) => (
          <div key={o.id} className="border border-gray-100 rounded-xl p-3 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-bold text-gray-900">Pedido {o.id}</p>
              <span className={`text-[7px] font-bold px-2 py-0.5 rounded-full ${o.color}`}>{o.status}</span>
            </div>
            <div className="flex items-center gap-2">
              <o.icon size={12} className="text-gray-400" />
              <p className="text-[8px] text-gray-400">{o.date}</p>
            </div>
            <div className="flex gap-1.5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                  <Package size={10} className="text-gray-300" />
                </div>
              ))}
              <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-[7px] text-gray-400 font-bold">+2</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <BottomNav />
  </PhoneFrame>
);

const ScreenAvistaoCard = () => (
  <PhoneFrame label="Avistão Card">
    <StatusBar />
    <div className="flex-1 overflow-hidden">
      <div className="bg-gradient-to-br from-amber-500 via-amber-400 to-yellow-400 px-4 pt-3 pb-8 relative overflow-hidden">
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
        <div className="absolute bottom-0 -left-4 w-20 h-20 bg-white/5 rounded-full" />
        <p className="text-[8px] font-bold text-amber-900/60 uppercase tracking-wider">Seu cartão</p>
        <p className="text-[14px] font-black text-amber-900 mt-0.5">Avistão Card</p>
        <div className="mt-3 flex justify-center">
          <img src={avistaoCardImg} alt="Avistão Card" className="w-28 drop-shadow-lg" />
        </div>
      </div>
      <div className="px-3 -mt-4 relative z-10 space-y-2">
        <div className="bg-white rounded-xl shadow-md p-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
            <Gift size={14} className="text-amber-600" />
          </div>
          <div className="flex-1">
            <p className="text-[9px] font-bold text-gray-900">Ver vantagens</p>
            <p className="text-[7px] text-gray-400">Benefícios exclusivos</p>
          </div>
          <ChevronRight size={12} className="text-gray-300" />
        </div>
        <div className="bg-white rounded-xl shadow-md p-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
            <CreditCard size={14} className="text-red-600" />
          </div>
          <div className="flex-1">
            <p className="text-[9px] font-bold text-gray-900">Como solicitar</p>
            <p className="text-[7px] text-gray-400">Passo a passo simples</p>
          </div>
          <ChevronRight size={12} className="text-gray-300" />
        </div>
        <div className="bg-white rounded-xl shadow-md p-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
            <Percent size={14} className="text-green-600" />
          </div>
          <div className="flex-1">
            <p className="text-[9px] font-bold text-gray-900">Ofertas do cartão</p>
            <p className="text-[7px] text-gray-400">Promoções exclusivas</p>
          </div>
          <ChevronRight size={12} className="text-gray-300" />
        </div>
      </div>
    </div>
    <BottomNav />
  </PhoneFrame>
);

const ScreenCardSteps = () => (
  <PhoneFrame label="Solicitar Cartão">
    <StatusBar />
    <div className="flex-1 overflow-hidden">
      <div className="px-4 pt-2 pb-2 flex items-center gap-2">
        <ArrowLeft size={14} className="text-gray-600" />
        <p className="text-[11px] font-black text-gray-900">Como fazer o Avistão Card</p>
      </div>
      <div className="px-3 space-y-2">
        {[
          { step: 1, title: "Documentos necessários", items: ["RG ou CNH", "CPF", "Comp. de residência", "Telefone"] },
          { step: 2, title: "Dirija-se a uma filial", items: ["Leve os documentos", "Procure o atendimento"] },
          { step: 3, title: "Análise do cadastro", items: ["Processo rápido", "Resposta em minutos"] },
          { step: 4, title: "Cartão liberado!", items: ["Use no app e nas lojas", "Benefícios imediatos"] },
        ].map((s) => (
          <div key={s.step} className="flex gap-3 p-2.5 bg-gray-50 rounded-xl">
            <div className="w-7 h-7 rounded-full bg-red-600 text-white text-[9px] font-black flex items-center justify-center shrink-0">{s.step}</div>
            <div>
              <p className="text-[9px] font-bold text-gray-900">{s.title}</p>
              <div className="mt-1 space-y-0.5">
                {s.items.map((item) => (
                  <p key={item} className="text-[7px] text-gray-400 flex items-center gap-1">
                    <CheckCircle2 size={7} className="text-green-500" /> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <BottomNav />
  </PhoneFrame>
);

const ScreenBenefits = () => (
  <PhoneFrame label="Benefícios">
    <StatusBar />
    <div className="flex-1 overflow-hidden">
      <div className="bg-gradient-to-r from-amber-500 to-amber-400 px-4 py-3">
        <p className="text-[12px] font-black text-amber-900">Vantagens do Avistão Card</p>
        <p className="text-[8px] text-amber-800/70 mt-0.5">Benefícios exclusivos para portadores</p>
      </div>
      <div className="px-3 mt-3 space-y-2">
        {[
          { icon: CreditCard, title: "Parcelamento facilitado", desc: "Parcele suas compras em até 4x" },
          { icon: Percent, title: "Descontos exclusivos", desc: "Ofertas especiais só para o cartão" },
          { icon: Star, title: "Programa de pontos", desc: "Acumule pontos a cada compra" },
          { icon: Gift, title: "Aniversário", desc: "Desconto especial no mês do aniversário" },
          { icon: Heart, title: "Prioridade", desc: "Atendimento prioritário nas filiais" },
        ].map((b) => (
          <div key={b.title} className="flex items-center gap-3 p-2.5 border border-gray-100 rounded-xl">
            <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center">
              <b.icon size={14} className="text-amber-600" />
            </div>
            <div>
              <p className="text-[9px] font-bold text-gray-900">{b.title}</p>
              <p className="text-[7px] text-gray-400">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <BottomNav />
  </PhoneFrame>
);

const ScreenOffers = () => (
  <PhoneFrame label="Ofertas">
    <StatusBar />
    <div className="flex-1 overflow-hidden">
      <div className="bg-gradient-to-r from-red-700 to-red-600 px-4 py-3">
        <p className="text-[12px] font-black text-white">🔥 Ofertas da Semana</p>
        <p className="text-[8px] text-white/70 mt-0.5">Promoções imperdíveis para você</p>
      </div>
      <div className="px-3 mt-2.5 space-y-2">
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-3 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-12 h-12 bg-white/10 rounded-full -translate-y-3 translate-x-3" />
          <p className="text-[7px] font-bold text-green-100">ESPECIAL HORTIFRUTI</p>
          <p className="text-[12px] font-black text-white">Até 40% OFF</p>
          <p className="text-[7px] text-green-100 mt-0.5">Válido até sexta-feira</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { name: "Açúcar 5kg", price: "R$ 14,99", old: "R$ 19,90", tag: "-25%" },
            { name: "Óleo de Soja", price: "R$ 6,49", old: "R$ 8,99", tag: "-28%" },
            { name: "Café 500g", price: "R$ 12,90", old: "R$ 16,90", tag: "-24%" },
            { name: "Feijão 1kg", price: "R$ 7,99", old: "R$ 9,99", tag: "-20%" },
          ].map((p) => (
            <div key={p.name} className="border border-gray-100 rounded-xl p-2 relative">
              <span className="absolute top-1.5 right-1.5 bg-red-600 text-white text-[6px] font-bold px-1.5 py-0.5 rounded-full">{p.tag}</span>
              <div className="bg-gray-50 rounded-lg aspect-square flex items-center justify-center mb-1.5">
                <Package size={16} className="text-gray-300" />
              </div>
              <p className="text-[8px] font-semibold text-gray-800">{p.name}</p>
              <span className="text-[6px] text-gray-400 line-through">{p.old}</span>
              <span className="text-[9px] font-black text-red-600 ml-1">{p.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <BottomNav active={1} />
  </PhoneFrame>
);

/* ═══════════════════════════════════════════════
   MAIN SECTION
   ═══════════════════════════════════════════════ */

const screens = [
  { id: "home", label: "Início", component: ScreenHome },
  { id: "branches", label: "Filiais", component: ScreenBranches },
  { id: "catalog", label: "Catálogo", component: ScreenCatalog },
  { id: "product", label: "Produto", component: ScreenProduct },
  { id: "cart", label: "Carrinho", component: ScreenCart },
  { id: "checkout", label: "Checkout", component: ScreenCheckout },
  { id: "orders", label: "Pedidos", component: ScreenOrders },
  { id: "card", label: "Avistão Card", component: ScreenAvistaoCard },
  { id: "cardsteps", label: "Solicitar", component: ScreenCardSteps },
  { id: "benefits", label: "Benefícios", component: ScreenBenefits },
  { id: "offers", label: "Ofertas", component: ScreenOffers },
];

const AppScreensSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="section-spacing section-dark overflow-hidden relative">
      <div className="absolute inset-0 text-white opacity-15 overflow-hidden"><FloatingPaths position={1} /><FloatingPaths position={-1} /></div>
      <div className="container relative z-10">
        <AnimateOnScroll>
          <div className="container-narrow text-center space-y-5 mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 text-primary font-display font-bold text-xs tracking-widest uppercase">
              <Smartphone size={14} />
              Preview do App
            </div>
            <h2 className="heading-xl">
              Veja como o app ficaria{" "}
              <span className="text-gradient">na prática</span>
            </h2>
            <p className="body-lg text-dark-foreground/50 max-w-2xl mx-auto">
              Interfaces reais de como seria a experiência do cliente e da operação dentro do aplicativo do Avistão.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Tab pills */}
        <AnimateOnScroll delay={50}>
          <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-10 md:mb-14 px-2">
            {screens.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActiveIdx(i)}
                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-display font-bold transition-all duration-300 ${
                  i === activeIdx
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-white/[0.06] text-dark-foreground/40 hover:bg-white/[0.1] hover:text-dark-foreground/60"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Active screen */}
        <div className="flex justify-center">
          <AnimateOnScroll key={activeIdx}>
            {(() => {
              const Screen = screens[activeIdx].component;
              return <Screen />;
            })()}
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll delay={200}>
          <p className="text-center text-xs md:text-sm text-dark-foreground/30 mt-10 md:mt-14 max-w-lg mx-auto">
            * Telas ilustrativas da proposta de design. O visual final pode ser ajustado conforme a identidade do Avistão.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default AppScreensSection;
